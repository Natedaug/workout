import { useEffect, useState } from "react";
import axios from "axios";
import LibraryList from "../components/library/LibraryList";
import UserWorkoutList from "../components/usersWorkout/UserWorkoutList";
import Filter from "../components/Filter";
import useExerciseContext from "../hooks/use-exercise-context";

function LibraryPage() {
	const {
		fetchExerciseLibrary,
		fetchworkoutList,
		isSortReverse,
		exerciseLibrary,
		setExerciseLibrary,
	} = useExerciseContext();

	//new api library newExerciseLibrary === "muscleWikiDB"
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
		setNewExerciseLibrary(sortLibrary(newExerciseLibrary));
	}, [isSortReverse]);

	useEffect(() => {
		fetchExerciseLibrary();
	}, []);

	useEffect(() => {
		// keep persitance state in UI
		fetchworkoutList();
	}, [fetchworkoutList]);

	return (
		<>
			<Filter />
			<div className="flex space-x-8 justify-center">
				<LibraryList newExerciseLibrary={newExerciseLibrary} />
				<UserWorkoutList />
			</div>
		</>
	);
}

export default LibraryPage;
