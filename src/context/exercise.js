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
		const response = await axios.get("http://localhost:3001/exerciseLib");
		setExerciseLibrary(sortLibrary(response.data));
	};

	const fetchworkoutList = useCallback(async () => {
		const response = await axios.get("http://localhost:3001/workoutList");
		setWorkoutList(response.data);
	}, []);

	const addExercise = async (exercise) => {
		delete exercise["id"]; //remove id from library so user worklist database adds a new id

		const response = await axios.post(
			`http://localhost:3001/workoutList`,
			exercise
		);

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

	const valueToShare = {
		exerciseLibrary,
		workoutList,
		fetchExerciseLibrary,
		fetchworkoutList,
		addExercise,
		deleteExercise,
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
