const ModalActionBar = ({ children, ...rest }) => {
	return (
		<>
			<div className="flex justify-end" {...rest}>
				{children}
			</div>
		</>
	);
};

export default ModalActionBar;
