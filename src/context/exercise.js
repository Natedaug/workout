import { createContext, useState, useCallback } from "react";
import supabase from "../config/supaBaseClient";
import { logError } from "../utils/helpers";

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

	const fetchCustomDB = useCallback(async () => {
		const { data, error } = await supabase.from("customdb").select();

		if (error) {
			logError(error);
		} else {
			setExerciseLibrary(data);
		}
	}, []);

	const fetchMyWorkoutList = useCallback(async () => {
		const { data, error } = await supabase.from("myWorkoutList").select();

		if (error) {
			logError(error);
		} else {
			setWorkoutList(data);
		}
	}, []);

	const addExercise = async (exercise) => {
		const { error } = await supabase.from("myWorkoutList").insert(exercise);

		if (error) {
			logError(error);
		} else {
			setWorkoutList([...workoutList, exercise]);
		}
	};

	const deleteExercise = async (exerciseToDelete) => {
		const { error } = await supabase
			.from("myWorkoutList")
			.delete()
			.eq("id", exerciseToDelete.id);

		if (error) {
			logError(error);
		} else {
			const updatedWorkoutList = workoutList.filter((exercise) => {
				return exercise.id !== exerciseToDelete.id;
			});
			setWorkoutList(updatedWorkoutList);
		}
	};

	const valueToShare = {
		exerciseLibrary,
		workoutList,
		setWorkoutList,
		fetchCustomDB,
		fetchMyWorkoutList,
		addExercise,
		deleteExercise,
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
