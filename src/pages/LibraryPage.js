import { useEffect } from "react";
import LibraryList from "../components/library/LibraryList";
import UserWorkoutList from "../components/usersWorkout/UserWorkoutList";
import Filter from "../components/Filter";
import useExerciseContext from "../hooks/use-exercise-context";

function HomePage(props) {
	const {
		fetchExerciseLibrary,
		fetchworkoutList,
		isSortReverse,
		exerciseLibrary,
		setExerciseLibrary,
	} = useExerciseContext();

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
				<LibraryList />
				<UserWorkoutList />
			</div>
		</div>
	);
}

export default HomePage;
