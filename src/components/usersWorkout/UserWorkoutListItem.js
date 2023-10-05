import { GoCheck } from "react-icons/go";
import { useState } from "react";
import useExerciseContext from "../../hooks/use-exercise-context";

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
			{exercise.label}

			{onMyWorkoutPage && (
				<button
					className={
						exerciseCompleted
							? "rounded-full ml-4 border-2 border-green-500 bg-green-300 px-4"
							: "rounded-full ml-4 border-2 border-indigo-500 bg-indigo-300 px-4"
					}
					onClick={() => handleCompleted(exercise)}
				>
					<GoCheck />
				</button>
			)}

			{!exerciseCompleted && (
				<button
					className="rounded-full ml-4 border-2 border-indigo-500 bg-indigo-300 px-4"
					onClick={() => handleDelete(exercise)}
				>
					-
				</button>
			)}
		</li>
	);
}

export default ButtonShow;
