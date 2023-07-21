import { useState } from "react";
import { GoCheck } from "react-icons/go";

function ButtonShow({ exercise, onMyWorkoutPage, handleDelete }) {
	const [excerciseCompleted, setExcerciseCompleted] = useState(false);

	const handleCompleted = () => {
		setExcerciseCompleted(true);
	};

	return (
		<li className="my-2 flex justify-between">
			{exercise.label}

			{onMyWorkoutPage && (
				<button
					className={
						excerciseCompleted
							? "rounded-full ml-4 border-2 border-green-500 bg-green-300 px-4"
							: "rounded-full ml-4 border-2 border-indigo-500 bg-indigo-300 px-4"
					}
					onClick={() => handleCompleted()}
				>
					<GoCheck />
				</button>
			)}

			{!excerciseCompleted && (
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
