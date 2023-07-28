import { useEffect, useState } from "react";
import axios from "axios";
import LibraryList from "../components/library/LibraryList";
import WorkoutList from "../components/usersWorkout/WorkoutList";
import Filter from "../components/Filter";
import useExerciseContext from "../hooks/use-exercise-context";

function HomePage() {
	const {
		fetchExerciseLibrary,
		fetchworkoutList,
		isSortReverse,
		exerciseLibrary,
		setExerciseLibrary,
	} = useExerciseContext();

	//new api library
	const [newExerciseLibrary, setNewExerciseLibrary] = useState([]);

	const fetchNewExerciseLibrary = async () => {
		const response = await axios.get("http://localhost:3001/muscleWikiDB");
		setNewExerciseLibrary(response.data);
	};
	useEffect(() => {
		fetchNewExerciseLibrary();
	}, []);

	const sortLibrary = (library) => {
		return [...library].sort(
			(a, b) => a.label.localeCompare(b.label) * (isSortReverse ? -1 : 1)
		);
	};

	useEffect(() => {
		setExerciseLibrary(sortLibrary(exerciseLibrary));
	}, [isSortReverse]);

	useEffect(() => {
		fetchExerciseLibrary();
	}, []);

	useEffect(() => {
		fetchworkoutList();
	}, [fetchworkoutList]);

	return (
		<div>
			<Filter />
			<div className="flex space-x-8 ml-4">
				<LibraryList newExerciseLibrary={newExerciseLibrary} />
				<WorkoutList />
			</div>
		</div>
	);
}

export default HomePage;
