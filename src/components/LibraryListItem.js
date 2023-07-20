import { useState } from "react";
import Modal from "../Modal";
import ExcerciseCard from "../ExcerciseCard";

function LibraryListItem({ index, exercise, addExercise }) {
	const [showModal, setShowModal] = useState(false);

	const modalActionBar = (
		<>
			<button
				onClick={() => {
					addExercise(exercise);
					setShowModal(false);
				}}
			>
				Add Excercise
			</button>
			<button onClick={() => setShowModal(false)}>Close</button>
		</>
	);

	return (
		<li key={index}>
			{exercise.label}
			<button onClick={() => setShowModal(true)}>Info</button>
			<button onClick={() => addExercise(exercise)}>+</button>

			{showModal && (
				<>
					<Modal setShowModal={setShowModal} modalActionBar={modalActionBar}>
						<ExcerciseCard exercise={exercise} />
					</Modal>
				</>
			)}
		</li>
	);
}

export default LibraryListItem;
