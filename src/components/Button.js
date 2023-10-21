const Button = ({ className, onClick, children, ...rest }) => {
	const defaultStyling = "rounded-full ml-4 border-2 px-4 mb-4";

	return (
		<button
			className={`${defaultStyling}${" "}${className}`}
			onClick={onClick}
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;
