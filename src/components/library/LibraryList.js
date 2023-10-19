import { useState, useEffect } from "react";
import useExerciseContext from "../../hooks/use-exercise-context";
import LibraryListItem from "./LibraryListItem";
import Toggle from "../Toggle";

function LibraryList({ newExerciseLibrary }) {
	const { exerciseLibrary, addExercise, activeFilters } = useExerciseContext();
	const [customDB, setCustomDB] = useState(false);
	const [listToDisplay, setListToDisplay] = useState([...newExerciseLibrary]);

	const activeBtnStyle = " bg-emerald-300";
	const inActiveBtnStyle = " bg-indigo-300";
	const toggleDB = () => setCustomDB((current) => !current);

	const renderedList = listToDisplay
		.filter((exercise) => {
			if (activeFilters.length !== 0) {
				// Check if any of the exercise's tags match any of the active filters
				return exercise.tags.some((tag) => activeFilters.includes(tag));
			}
			return true; // If no active filters, show all exercises
		})
		.map((exercise, i) => (
			<LibraryListItem
				key={i}
				index={i}
				exercise={exercise}
				addExercise={addExercise}
			/>
		));

	useEffect(() => {
		if (customDB) {
			setListToDisplay([...exerciseLibrary]);
		} else {
			setListToDisplay([...newExerciseLibrary]);
		}
	}, [customDB]);

	//Refactor: look into useCallback or useMemo, might be away to avoid...
	useEffect(() => {
		setListToDisplay([...newExerciseLibrary]);
	}, [newExerciseLibrary]);

	return (
		<div className="border-x-2 border-indigo-500 px-4 max-h-96 overflow-auto min-w-[520px]">
			<h3 className="relative	border-b-2 border-indigo-500 flex justify-center mb-4">
				<Toggle label="sort" />
				<div className="font-bold text-indigo-500">Library List</div>
				<button
					onClick={toggleDB}
					className={`transition-colors p-1 mb-4 text-xs mx-4 rounded-full ml-4 border-2 border-indigo-500 ${
						!customDB ? activeBtnStyle : inActiveBtnStyle
					}`}
					disabled={!customDB}
				>
					MuscleWikiDB
				</button>
				<button
					onClick={toggleDB}
					className={`transition-colors p-1 mb-4 text-xs mx-4 rounded-full ml-4 border-2 border-indigo-500 ${
						customDB ? activeBtnStyle : inActiveBtnStyle
					}`}
					disabled={customDB}
				>
					CustomDB
				</button>
			</h3>

			{listToDisplay.length === 0 ? "Loading..." : <ul>{renderedList}</ul>}
		</div>
	);
}

export default LibraryList;
