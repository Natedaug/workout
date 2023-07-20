import { useEffect, useState, useCallback } from "react";
import LibraryList from "./components/LibraryList";
import WorkoutList from "./components/WorkoutList";
import axios from "axios";
import Filter from "./components/Filter";

function App() {
	const [exerciseLibrary, setExerciseLibrary] = useState([]);
	const [workoutList, setWorkoutList] = useState([]);
	const [activeFilters, setActiveFiltersList] = useState([]);
	const [isSortReverse, setIsSortReverse] = useState(false);

	const sortLibrary = (library) => {
		return [...library].sort(
			(a, b) => a.label.localeCompare(b.label) * (isSortReverse ? -1 : 1)
		);
	};

	useEffect(() => {
		setExerciseLibrary(sortLibrary(exerciseLibrary));
	}, [isSortReverse]);

	const fetchExerciseLibrary = useCallback(async () => {
		const response = await axios.get("http://localhost:3001/exerciseLib");
		setExerciseLibrary(response.data);
	});

	useEffect(() => {
		fetchExerciseLibrary();
	}, []);

	const addExercise = async (exercise) => {
		delete exercise["id"];

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

	return (
		<div>
			<Filter
				setActiveFiltersList={setActiveFiltersList}
				setIsSortReverse={setIsSortReverse}
				isSortReverse={isSortReverse}
			/>
			<LibraryList
				exerciseLibrary={exerciseLibrary}
				addExercise={addExercise}
				activeFilters={activeFilters}
			/>
			<WorkoutList workoutList={workoutList} deleteExercise={deleteExercise} />
		</div>
	);
}

export default App;
