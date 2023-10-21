import { GoCheck } from "react-icons/go";
import { useState } from "react";
import useExerciseContext from "../../hooks/use-exercise-context";
import Button from "../Button";

function ButtonShow({ exercise, onMyWorkoutPage, handleDelete }) {
	const { completedExercise } = useExerciseContext();
	const [exerciseCompleted, setExerciseCompleted] = useState(
		exercise.completed
	);

	const handleCompleted = (exercise) => {
		// allow 1 Btn click
		if (exerciseCompleted) return;

		completedExercise(exercise);
		setExerciseCompleted(true);
	};

	return (
		<li className="my-2 flex justify-between">
			<div>{exercise.label}</div>
			<div>
				{onMyWorkoutPage && (
					<Button
						className={
							exerciseCompleted
								? "border-green-500 bg-green-300"
								: "border-indigo-500 bg-indigo-300"
						}
						onClick={() => handleCompleted(exercise)}
					>
						<GoCheck />
					</Button>
				)}

				{!exerciseCompleted && (
					<Button
						className="border-indigo-500 bg-indigo-300"
						onClick={() => handleDelete(exercise)}
					>
						-
					</Button>
				)}
			</div>
		</li>
	);
}

export default ButtonShow;
