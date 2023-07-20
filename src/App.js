import { useEffect, useState } from "react";
import axios from "axios";
import LibraryList from "./components/LibraryList";
import WorkoutList from "./components/WorkoutList";
import Filter from "./components/Filter";

function App() {
	const [exerciseLibrary, setExerciseLibrary] = useState([]);
	const [workoutList, setWorkoutList] = useState([]);
	const [activeFilters, setActiveFiltersList] = useState([]);

	const fetchExerciseLibrary = async () => {
		const response = await axios.get("http://localhost:3001/exerciseLib");
		setExerciseLibrary(response.data);
	};

	useEffect(() => {
		fetchExerciseLibrary();
	}, []);

	const addExercise = async (exercise) => {
		// exercise["libId"] = exercise["id"];
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
		<>
			<div>
				<Filter setActiveFiltersList={setActiveFiltersList} />
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
		</>
	);
}

export default App;
