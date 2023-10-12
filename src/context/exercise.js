import { createContext, useState, useCallback } from "react";
import axios from "axios";

const ExerciseContext = createContext();

function Provider({ children }) {
	const [exerciseLibrary, setExerciseLibrary] = useState([]);
	const [workoutList, setWorkoutList] = useState([]);
	const [activeFilters, setActiveFiltersList] = useState([]);
	const [isSortReverse, setIsSortReverse] = useState(false);

	const sortLibrary = (library) => {
		return [...library].sort(
			(a, b) => a.label.localeCompare(b.label) * (isSortReverse ? -1 : 1)
		);
	};

	const fetchExerciseLibrary = async () => {
		//Our custom lib data
		const response = await axios.get("http://localhost:3001/exerciseLib");
		setExerciseLibrary(sortLibrary(response.data));
	};

	const fetchworkoutList = useCallback(async () => {
		// the users workoutList
		const response = await axios.get("http://localhost:3001/workoutList");
		setWorkoutList(response.data);
	}, []);

	const addExercise = async (exercise) => {
		delete exercise["id"]; //remove id from muscleWikiDB, as user worklist database adds a new id

		// updating db.json
		const response = await axios.post(
			`http://localhost:3001/workoutList`,
			exercise
		);

		// updating local state
		setWorkoutList([...workoutList, response.data]);
	};

	const deleteExercise = async (exerciseToDelete) => {
		await axios.delete(
			`http://localhost:3001/workoutList/${exerciseToDelete.id}`
		);
		//check for for successful
		const updatedWorkoutList = workoutList.filter((exercise) => {
			return exercise.id !== exerciseToDelete.id;
		});
		setWorkoutList(updatedWorkoutList);
	};

	const completedExercise = async (exercise) => {
		const response = await axios.put(
			`http://localhost:3001/workoutList/${exercise.id}`,
			{
				...exercise,
				completed: true,
			}
		);

		const updatedWorkoutList = workoutList.map((workoutItem) => {
			if (workoutItem === exercise.id) {
				return response.data;
			}
			return workoutItem;
		});

		setWorkoutList(updatedWorkoutList);
	};

	const valueToShare = {
		exerciseLibrary,
		workoutList,
		fetchExerciseLibrary,
		fetchworkoutList,
		addExercise,
		deleteExercise,
		completedExercise,
		activeFilters,
		isSortReverse,
		setIsSortReverse,
		setActiveFiltersList,
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
