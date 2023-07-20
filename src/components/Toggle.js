import { GoChevronDown, GoChevronUp } from "react-icons/go";

function Toggle({ label, isSortReverse, setIsSortReverse, rest }) {
	console.log("isSortReverse: ", isSortReverse);
	return (
		<label className="flex mr-4">
			<div className="mr-1">
				{isSortReverse ? <GoChevronUp /> : <GoChevronDown />}
			</div>
			<input
				// className="sr-only"
				type="checkbox"
				defaultChecked={isSortReverse}
				onClick={(e) => {
					console.log(522, e);

					return setIsSortReverse(!isSortReverse);
				}}
				{...rest}
			/>
			<span />
			<span>{label}</span>
		</label>
	);
}

export default Toggle;
