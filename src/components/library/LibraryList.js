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

	// Refactor: consider using .filter() instead of .map()
	const renderedList = listToDisplay.map((exercise, i) => {
		let visible = true;
		if (activeFilters.length !== 0) {
			visible = false;
			exercise.tags.map((tag) => {
				activeFilters.map((filter) => {
					if (tag === filter) {
						visible = true;
						return;
					}
				});
			});
		}

		if (visible) {
			return (
				<LibraryListItem
					key={i}
					index={i}
					exercise={exercise}
					addExercise={addExercise}
				/>
			);
		}
	});

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
