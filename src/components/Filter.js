import { useState, useEffect } from "react";
import Checkbox from "./Checkbox";
import useExerciseContext from "../hooks/use-exercise-context";

function Filter() {
	const { setActiveFiltersList } = useExerciseContext();
	const filterOptions = [
		"weights",
		"cardio",
		"Barbell",
		"Dumbbells",
		"Kettlebells",
		"Stretches",
		"Cables",
		"Band",
		"TRX",
		"Bodyweight",
		"Yoga",
		"Machine",
		"MedicineBall",
	];

	const [checkedState, setCheckedState] = useState(
		new Array(filterOptions.length).fill(false) //creates an array as long as filterOption of all false boolean values
	);

	useEffect(() => {
		//handle active filters state
		const checkedBoxes = renderedCheckbox.filter((box) => box.props.checked);
		const filters = checkedBoxes.map((box) => box.props.value);
		setActiveFiltersList(filters);
	}, [checkedState]);

	const handleCheckbox = (position) => {
		//handle checked state
		const updatedCheckedState = checkedState.map((item, index) =>
			index === position ? !item : item
		);
		setCheckedState(updatedCheckedState);
	};

	const renderedCheckbox = filterOptions.map((option, index) => {
		return (
			<Checkbox
				key={option}
				value={option}
				checked={checkedState[index]}
				onChange={() => handleCheckbox(index)}
			/>
		);
	});

	return (
		<div className="flex justify-center my-10">
			<h3 className="mt-4 font-bold text-indigo-500 ml-4">Filter:</h3>
			<form className="flex flex-wrap	max-w-md ml-4 mb-4 w-fit border-2 border-indigo-500 p-2 justify-center">
				{renderedCheckbox}
			</form>
		</div>
	);
}

export default Filter;
