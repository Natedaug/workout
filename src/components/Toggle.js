import { GoChevronDown, GoChevronUp } from "react-icons/go";

function Toggle({ label, isSortReverse, setIsSortReverse, rest }) {
	return (
		<label className="flex mr-4">
			<div className="mr-1">
				{isSortReverse ? <GoChevronUp /> : <GoChevronDown />}
			</div>
			<input
				className="sr-only"
				type="checkbox"
				defaultChecked={isSortReverse}
				onClick={() => setIsSortReverse(!isSortReverse)}
				{...rest}
			/>
			<span />
			<span>{label}</span>
		</label>
	);
}

export default Toggle;
