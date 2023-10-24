import ReactDOM from "react-dom";
import { useEffect } from "react";
import Button from "./Button";

function Modal({ setShowModal, exercise, addExercise, children }) {
	useEffect(() => {
		document.body.classList.add("overflow-hidden");

		return () => {
			document.body.classList.remove("overflow-hidden");
		};
	}, []);

	const modalContent = (
		<div>
			{/* modal background */}
			<div
				onClick={() => setShowModal(false)}
				className="fixed inset-0 bg-gray-300 opacity-80 flex"
			></div>

			{/* modal wrapper & children === content */}
			<div className="fixed inset-10 p-4 bg-white overflow-auto rounded-lg border-2 border-indigo-500">
				<div className="flex flex-col justify-between h-full">
					{children}
					{/* Action Bar */}
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
				</div>
			</div>
		</div>
	);

	return ReactDOM.createPortal(
		modalContent,
		document.querySelector(".modal-container")
	);
}

export default Modal;
