import axios from "axios";
import Filter from "../components/Filter";
import LibraryList from "../components/library/LibraryList";
import WorkoutList from "../components/usersWorkout/WorkoutList";
import { useCallback, useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function HomePage(props) {
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

	const fetchExerciseLibrary = async () => {
		const response = await axios.get("http://localhost:3001/exerciseLib");
		setExerciseLibrary(sortLibrary(response.data));
	};

	useEffect(() => {
		fetchExerciseLibrary();
	}, []);

	const fetchworkoutList = useCallback(async () => {
		const response = await axios.get("http://localhost:3001/workoutList");
		setWorkoutList(response.data);
	}, []);

	useEffect(() => {
		fetchworkoutList();
	}, [fetchworkoutList]);

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

	return (
		<div>
			<Navbar />
			<Filter
				setActiveFiltersList={setActiveFiltersList}
				setIsSortReverse={setIsSortReverse}
				isSortReverse={isSortReverse}
			/>
			<div className="flex space-x-8 ml-4">
				<LibraryList
					exerciseLibrary={exerciseLibrary}
					addExercise={addExercise}
					activeFilters={activeFilters}
				/>
				<WorkoutList
					workoutList={workoutList}
					deleteExercise={deleteExercise}
				/>
			</div>
		</div>
	);
}

export default HomePage;
