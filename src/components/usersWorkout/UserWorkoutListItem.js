import { GoCheck, GoTrash, GoKebabHorizontal } from "react-icons/go";
import { useState } from "react";
import useExerciseContext from "../../hooks/use-exercise-context";
import Button from "../Button";

function UserWorkoutListItem({
	exercise,
	onMyWorkoutPage,
	handleDelete,
	setSelectedWorkListItem,
}) {
	const { completedExercise } = useExerciseContext();
	const [exerciseCompleted, setExerciseCompleted] = useState(
		exercise.completed
	);

	const { handleCompleted, completedIcon, pendingIcon } = {
		completedIcon: <GoCheck />,
		pendingIcon: <GoKebabHorizontal />,
		handleCompleted: (exercise) => {
			// !!! Refactor, This will need a more through implmentation after DB is set up

			//update DB
			completedExercise(exercise);

			//update App State
			setExerciseCompleted((current) => !current);
		},
	};

	return (
		<li className="my-2 flex justify-between">
			{onMyWorkoutPage ? (
				<span
					className="text-emerald-600	font-bold w-full text-left hover:bg-indigo-200"
					onClick={() => setSelectedWorkListItem(exercise.id)}
				>
					{exercise.label}
				</span>
			) : (
				<span>{exercise.label}</span>
			)}
			<div>
				{onMyWorkoutPage ? (
					<Button
						className={
							exerciseCompleted
								? "border-green-500 bg-green-300"
								: "border-indigo-500 bg-indigo-300"
						}
						onClick={() => handleCompleted(exercise)}
					>
						{exerciseCompleted ? completedIcon : pendingIcon}
					</Button>
				) : (
					<Button
						className="border-indigo-500 bg-indigo-300"
						onClick={() => handleDelete(exercise)}
					>
						<GoTrash />
					</Button>
				)}
			</div>
		</li>
	);
}

export default UserWorkoutListItem;
