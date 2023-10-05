import { useEffect, useState } from "react";
import useExerciseContext from "../../hooks/use-exercise-context";
import { useLocation } from "react-router-dom";
import UserWorkoutListItem from "./UserWorkoutListItem";
import { userWorkoutPath } from "../../pages/pathways";

function UserWorkoutList() {
	const location = useLocation();
	const { workoutList, deleteExercise } = useExerciseContext();
	const [onMyWorkoutPage, setOnMyWorkoutPage] = useState(false);

	const checkForUserPage = () => {
		if (location.pathname === userWorkoutPath) {
			setOnMyWorkoutPage(true);
		}
	};

	useEffect(() => {
		checkForUserPage();
	}, []);

	const handleDelete = (exercise) => {
		deleteExercise(exercise);
	};

	const workoutComplete = () => {
		console.log(411, " Workout is finished");
	};

	const renderedList = workoutList.map((exercise, i) => (
		<UserWorkoutListItem
			key={i}
			exercise={exercise}
			onMyWorkoutPage={onMyWorkoutPage}
			handleDelete={handleDelete}
		/>
	));

	const renderWorkoutCompleteBtn = (
		<div className="flex justify-center">
			<button
				className="rounded-full ml-4 border-2 border-green-500 bg-green-400 px-4"
				onClick={workoutComplete}
			>
				Workout Completed
			</button>
		</div>
	);

	return (
		<div className="border-x-2 border-indigo-500 px-4">
			<h3 className="border-b-2 border-indigo-500 flex justify-center mb-4 pb-4 font-bold text-indigo-500">
				User Workout List
			</h3>
			<ol>{renderedList}</ol>
			{renderWorkoutCompleteBtn}
		</div>
	);
}

export default UserWorkoutList;
