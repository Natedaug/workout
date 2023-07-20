import { useState } from "react";
import Modal from "./Modal";
import ExcerciseCard from "./ExcerciseCard";

function LibraryList({ exerciseLibrary, addExercise, activeFilters }) {
	const [showModal, setShowModal] = useState(false);
	const [selectedItem, setSelectedItem] = useState();

	const handleAdd = (exercise) => {
		addExercise(exercise);
	};

	const getInfo = (exercise) => {
		//DSCH START HERE: need to get ID for which item was clicked

		setSelectedItem(exercise.id);
		setShowModal(true);
	};

	const renderedList = exerciseLibrary.map((exercise, i) => {
		let visible = true;
		if (activeFilters.length !== 0) {
			visible = false;
			exercise.tags.map((tag) => {
				activeFilters.map((filter) => {
					if (tag === filter) {
						visible = true;
						return;
					}
				});
			});
		}

		if (visible) {
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
				<li key={i}>
					{exercise.label}
					<button onClick={() => getInfo(exercise)}>Info</button>
					<button onClick={() => handleAdd(exercise)}>+</button>

					{showModal && exercise.id === selectedItem (
						<>
							{/* {exercise.label} */}
							<Modal
								setShowModal={setShowModal}
								modalActionBar={modalActionBar}
							>
								<ExcerciseCard exercise={exercise} />
							</Modal>
						</>
					)}
				</li>
			);
		}
	});

	return <ul>{renderedList}</ul>;
}

export default LibraryList;
