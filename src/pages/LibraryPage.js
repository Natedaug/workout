import { useEffect, useState } from "react";
import LibraryList from "../components/library/LibraryList";
import MyWorkoutList from "../components/myWorkout/MyWorkoutList";
import Filter from "../components/Filter";
import useExerciseContext from "../hooks/use-exercise-context";
import supabase from "../config/supaBaseClient";
import { logError } from "../utils/helpers";

function LibraryPage() {
	const {
		fetchCustomDB,
		fetchMyWorkoutList,
		isSortReverse,
		exerciseLibrary,
		setExerciseLibrary,
	} = useExerciseContext();

	const [newExerciseLibrary, setNewExerciseLibrary] = useState([]);

	const sortLibrary = (library) => {
		return [...library].sort(
			(a, b) => a.label.localeCompare(b.label) * (isSortReverse ? -1 : 1)
		);
	};

	useEffect(() => {
		const fetchMuscleWiki = async () => {
			const { data, error } = await supabase.from("muscleWiki").select();

			if (error) {
				logError(error);
			} else {
				setNewExerciseLibrary(data);
			}
		};

		fetchMuscleWiki();
	}, []);

	useEffect(() => {
		setExerciseLibrary(sortLibrary(exerciseLibrary));
		setNewExerciseLibrary(sortLibrary(newExerciseLibrary));
	}, [isSortReverse]);

	useEffect(() => {
		fetchCustomDB();
	}, []);

	useEffect(() => {
		// keep persitance state in UI
		fetchMyWorkoutList();
	}, [fetchMyWorkoutList]);

	return (
		<>
			<Filter />
			<div className="flex space-x-8 justify-center">
				<LibraryList newExerciseLibrary={newExerciseLibrary} />
				<MyWorkoutList />
			</div>
		</>
	);
}

export default LibraryPage;
