function Checkbox({ value, ...rest }) {
	return (
		<div className="checkbox-wrapper">
			<label>
				<input type="checkbox" name={value} value={value} {...rest} />
				<span>{value}</span>
			</label>
		</div>
	);
}

export default Checkbox;
