const Button = ({ className, onClick, children, ...rest }) => {
	return (
		<button
			className={`rounded-full ml-4 border-2 px-4 mb-4 ${" "}${className}`}
			onClick={onClick}
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;
