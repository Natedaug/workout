import Button from "../Button";

const ModalActionBar = ({ exercise, addExercise, setShowModal }) => {
	return (
		<>
			<div className="flex justify-end">
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
			</div>
		</>
	);
};

export default ModalActionBar;
