import { useState } from "react";
import Modal from "../Modal/Modal";
import ExcerciseCard from "../ExerciseCard";
import ModalActionBar from "../Modal/ModalActionBar";

function LibraryListItem({ index, exercise, addExercise }) {
	const [showModal, setShowModal] = useState(false);

	return (
		<li key={index} className="my-2 flex justify-between">
			<button
				className="text-emerald-600	font-bold w-full text-left hover:bg-indigo-200"
				onClick={() => setShowModal(true)}
			>
				{exercise.label}
			</button>
			<button
				className="rounded-full ml-4 border-2 border-indigo-500 bg-indigo-300 px-4"
				onClick={() => addExercise(exercise)}
			>
				+
			</button>

			{showModal && (
				<Modal setShowModal={setShowModal}>
					<ExcerciseCard exercise={exercise} />
					<ModalActionBar
						exercise={exercise}
						addExercise={addExercise}
						setShowModal={setShowModal}
					/>
				</Modal>
			)}
		</li>
	);
}

export default LibraryListItem;
