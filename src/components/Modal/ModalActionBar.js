const ModalActionBar = ({ exercise, addExercise, setShowModal }) => {
	return (
		<>
			<div className="flex justify-end">
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
			</div>
		</>
	);
};

export default ModalActionBar;
