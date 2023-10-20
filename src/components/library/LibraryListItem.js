import { useState } from "react";
import Modal from "../Modal";
import ExcerciseCard from "../ExerciseCard";

function LibraryListItem({ index, exercise, addExercise }) {
	const [showModal, setShowModal] = useState(false);

	const modalActionBar = (
		<>
			<button
				className="rounded-full ml-4 border-2 border-indigo-500 bg-indigo-300 px-4 mb-4"
				onClick={() => {
					addExercise(exercise);
					setShowModal(false);
				}}
			>
				Add Excercise
			</button>
			<button
				className="rounded-full ml-4 border-2 border-red-500 bg-red-300 px-4 mb-4"
				onClick={() => setShowModal(false)}
			>
				Close
			</button>
		</>
	);

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
				<Modal setShowModal={setShowModal} modalActionBar={modalActionBar}>
					<ExcerciseCard exercise={exercise} />
				</Modal>
			)}
		</li>
	);
}

export default LibraryListItem;
