import { useState } from "react";
import useExerciseContext from "../../hooks/use-exercise-context";
import LibraryListItem from "./LibraryListItem";

function LibraryList({ newExerciseLibrary }) {
	const { exerciseLibrary, addExercise, activeFilters } = useExerciseContext();

	const [db, setdb] = useState(false);
	let listToDisplay = [];
	let muscleDBClass,
		customDBClass = "";
	if (!db) {
		muscleDBClass = " bg-emerald-300";
		customDBClass = "";
		listToDisplay = [...newExerciseLibrary];
	} else {
		muscleDBClass = "";
		customDBClass = " bg-emerald-300";
		listToDisplay = [...exerciseLibrary];
	}

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

	return (
		<div className="border-x-2 border-indigo-500 px-4 max-h-96 overflow-auto min-w-[520px]">
			<h3 className="border-b-2 border-indigo-500 flex justify-center mb-4">
				<button
					onClick={() => setdb(!db)}
					className={
						"transition-colors p-1 mb-4 text-xs mx-4 rounded-full ml-4 border-2 border-indigo-500  bg-indigo-300" +
						muscleDBClass
					}
				>
					MuscleWikiDB
				</button>
				Library List
				<button
					onClick={() => setdb(!db)}
					className={
						"transition-colors p-1 mb-4 text-xs mx-4 rounded-full ml-4 border-2 border-indigo-500 bg-indigo-300" +
						customDBClass
					}
				>
					CustomDB
				</button>
			</h3>

			<ul>{renderedList}</ul>
		</div>
	);
}

export default LibraryList;
