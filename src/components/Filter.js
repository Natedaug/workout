import { useState } from "react";
import Checkbox from "./Checkbox";

function Filter({ setActiveFiltersList }) {
	const filterOptions = ["all", "weights", "cardio"];

	const [checkedState, setCheckedState] = useState(
		new Array(filterOptions.length).fill(false)
	);

	const handleOnChange = (position) => {
		const updatedCheckedState = checkedState.map((item, index) =>
			index === position ? !item : item
		);

		setCheckedState(updatedCheckedState);
	};

	const handleFilter = (event) => {
		event.preventDefault();
		const checkedBoxes = renderedCheckbox.filter(
			(box) => box.props.checked
		);

		const filters = checkedBoxes.map((box) => box.props.value);

		setActiveFiltersList(filters);
	};

	const renderedCheckbox = filterOptions.map((option, index) => {
		return (
			<Checkbox
				key={index}
				value={option}
				checked={checkedState[index]}
				onChange={() => handleOnChange(index)}
			/>
		);
	});

	return (
		<form onSubmit={handleFilter}>
			{renderedCheckbox}
			<button type="submit">Filter Library</button>
		</form>
	);
}

export default Filter;
