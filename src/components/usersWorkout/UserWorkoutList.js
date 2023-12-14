import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useExerciseContext from "../../hooks/use-exercise-context";
import UserWorkoutListItem from "./UserWorkoutListItem";
import { userWorkoutPath } from "../../pages/pathways";
import Button from "../Button";

function UserWorkoutList({ setSelectedWorkListItem }) {
	//props set on UserWorkoutPage, none set for Library Page
	
	const location = useLocation();
	const { workoutList, deleteExercise } = useExerciseContext();
	const [onMyWorkoutPage, setOnMyWorkoutPage] = useState(false);

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
			setSelectedWorkListItem={setSelectedWorkListItem}
		/>
	));

	const renderWorkoutCompleteBtn = (
		<div className="flex justify-center">
			<Button
				className=" border-green-500 bg-green-400 px-4"
				onClick={workoutComplete}
			>
				Workout Completed
			</Button>
		</div>
	);

	useEffect(() => {
		// Check if the user is on the "My Workout" page
		if (location.pathname === userWorkoutPath) {
			setOnMyWorkoutPage(true);
		}
	}, []);

	return (
		<div className="border-x-2 border-indigo-500 px-4">
			<h3 className="border-b-2 border-indigo-500 flex justify-center mb-4 pb-4 font-bold text-indigo-500">
				My Workout
			</h3>
			<ol>{renderedList}</ol>
			{/* !!! Refactor when DB is set */}
			{onMyWorkoutPage && renderWorkoutCompleteBtn}
		</div>
	);
}

export default UserWorkoutList;
