import { useState } from "react";
import Modal from "../Modal";
import ExerciseCard from "../ExerciseCard";
import Button from "../Button";
import { GoPlus } from "react-icons/go";

function LibraryListItem({ index, exercise, addExercise }) {
	const [showModal, setShowModal] = useState(false);

	return (
		<li key={index} className="my-2 flex justify-between">
			<span
				className="text-emerald-600	font-bold w-full text-left hover:bg-indigo-200"
				onClick={() => setShowModal(true)}
			>
				{exercise.label}
			</span>
			<Button
				className="border-indigo-500 bg-indigo-300"
				onClick={() => addExercise(exercise)}
			>
				<GoPlus />
			</Button>

			{showModal && (
				<Modal
					setShowModal={setShowModal}
					exercise={exercise}
					addExercise={addExercise}
				>
					<ExerciseCard exercise={exercise} />
				</Modal>
			)}
		</li>
	);
}

export default LibraryListItem;
