import { createContext, useState, useCallback } from "react";
import supabase from "../config/supaBaseClient";

const ExerciseContext = createContext();

function Provider({ children }) {
	const [exerciseLibrary, setExerciseLibrary] = useState([]);
	const [workoutList, setWorkoutList] = useState([]);
	const [activeFilters, setActiveFilters] = useState([]);
	const [isSortReverse, setIsSortReverse] = useState(false);

	const sortLibrary = (library) => {
		return [...library].sort(
			(a, b) => a.label.localeCompare(b.label) * (isSortReverse ? -1 : 1)
		);
	};

	const fetchExerciseLibrary = useCallback(async () => {
		//Our custom library data
		const { data, error } = await supabase.from("customdb").select();

		if (!error) {
			setExerciseLibrary(data);
		}
	}, []);

	const fetchworkoutList = useCallback(async () => {
		const { data, error } = await supabase.from("userWorkoutList").select();
		console.log(411, data);
		console.log(911, error);
		setWorkoutList(data);
	}, []);

	const addExercise = async (exercise) => {
		// updating db.json

		const { error } = await supabase.from("userWorkoutList").insert(exercise);

		if (!error) {
			// updating local state
			setWorkoutList([...workoutList, exercise]);
		}
	};

	const deleteExercise = async (exerciseToDelete) => {
		const { error } = await supabase
			.from("userWorkoutList")
			.delete()
			.eq("id", exerciseToDelete.id);

		//check for for successful
		if (!error) {
			const updatedWorkoutList = workoutList.filter((exercise) => {
				return exercise.id !== exerciseToDelete.id;
			});
			setWorkoutList(updatedWorkoutList);
		}
	};

	const completedExercise = async (exercise) => {
		// !!! Refactor; needs integrations w/DB as of now only updates workoutList
		// const response = await axios.put(
		// 	`http://localhost:3001/workoutList/${exercise.id}`,
		// 	{
		// 		...exercise,
		// 		completed: true,
		// 	}
		// );
		// const updatedWorkoutList = workoutList.map((workoutItem) => {
		// 	if (workoutItem === exercise.id) {
		// 		return response.data;
		// 	}
		// 	return workoutItem;
		// });
		// setWorkoutList(updatedWorkoutList);
	};

	const valueToShare = {
		exerciseLibrary,
		workoutList,
		setWorkoutList,
		fetchExerciseLibrary,
		fetchworkoutList,
		addExercise,
		deleteExercise,
		completedExercise,
		activeFilters,
		isSortReverse,
		setIsSortReverse,
		setActiveFilters,
		setExerciseLibrary,
	};

	return (
		<ExerciseContext.Provider value={valueToShare}>
			{children}
		</ExerciseContext.Provider>
	);
}

export { Provider };
export default ExerciseContext;
