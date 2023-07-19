import ReactDOM from "react-dom";
import { useEffect } from "react";

function Modal({ setShowModal, children, actionBar }) {
	useEffect(() => {
		document.body.classList.add("overflow-hidden");

		return () => {
			document.body.classList.remove("overflow-hidden");
		};
	}, []);

	const modalContent = (
		<div>
			<div
				onClick={() => setShowModal(false)}
				className="fixed inset-0 bg-gray-300 opacity-80 flex"
			></div>
			<div className="fixed inset-40 p-10 bg-white">
				<div className="flex flex-col justify-between h-full">
					{children}
					<div className="flex justify-end">{actionBar}</div>
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
