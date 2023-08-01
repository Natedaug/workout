import { useEffect, useState } from "react";
import useExerciseContext from "../../hooks/use-exercise-context";
import { GoCheck } from "react-icons/go";
import { useLocation } from "react-router-dom";
import WorkoutListItem from "./WorkoutListItem";

function WorkoutList() {
	const location = useLocation();
	const { workoutList, deleteExercise } = useExerciseContext();
	const [onMyWorkoutPage, setOnMyWorkoutPage] = useState(false);
	// const [excerciseCompleted, setExcerciseCompleted] = useState(false);

	const checkForUserPage = () => {
		if (location.pathname === "/userWorkout") {
			setOnMyWorkoutPage(true);
		}
	};

	useEffect(() => {
		checkForUserPage();
	}, []);

	const handleDelete = (exercise) => {
		deleteExercise(exercise);
	};

	const renderedList = workoutList.map((exercise, i) => (
		<WorkoutListItem
			key={i}
			exercise={exercise}
			onMyWorkoutPage={onMyWorkoutPage}
			handleDelete={handleDelete}
		/>
	));

	return (
		<div className="border-x-2 border-indigo-500 px-4">
			<h3 className="border-b-2 border-indigo-500 flex justify-center mb-4 pb-4 font-bold text-indigo-500">
				User Workout List
			</h3>
			<ol>{renderedList}</ol>
		</div>
	);
}

export default WorkoutList;
