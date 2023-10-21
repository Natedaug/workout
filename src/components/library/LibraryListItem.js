import { useState } from "react";
import Modal from "../Modal";
import ExcerciseCard from "../ExerciseCard";
import ModalActionBar from "../ModalActionBar";
import Button from "../Button";

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
				+
			</Button>

			{showModal && (
				<Modal setShowModal={setShowModal}>
					<ExcerciseCard exercise={exercise} />
					<ModalActionBar>
						<Button
							className="border-indigo-500 bg-indigo-300"
							onClick={() => {
								addExercise(exercise);
								setShowModal(false);
							}}
						>
							Add Excercise
						</Button>
						<Button
							className="border-red-500 bg-red-300"
							onClick={() => setShowModal(false)}
						>
							Close
						</Button>
					</ModalActionBar>
				</Modal>
			)}
		</li>
	);
}

export default LibraryListItem;
