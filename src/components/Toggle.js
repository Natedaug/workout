import { GoChevronDown, GoChevronUp } from "react-icons/go";
import useExerciseContext from "../hooks/use-exercise-context";

function Toggle({ label, rest }) {
	const { isSortReverse, setIsSortReverse } = useExerciseContext();

	return (
		<label className="flex px-4 mr-4 cursor-pointer border-r-2 border-r-indigo-500">
			<div className="mr-1">
				{isSortReverse ? <GoChevronUp /> : <GoChevronDown />}
			</div>
			<input
				className="sr-only"
				type="checkbox"
				defaultChecked={isSortReverse}
				onClick={(e) => setIsSortReverse(!isSortReverse)}
				{...rest}
			/>
			<span />
			<span>{label}</span>
		</label>
	);
}

export default Toggle;
