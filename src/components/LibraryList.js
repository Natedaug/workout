import LibraryListItem from "./LibraryListItem";
import useExerciseContext from "../hooks/use-exercise-context";

function LibraryList() {
	const { exerciseLibrary, addExercise, activeFilters } = useExerciseContext();

	const renderedList = exerciseLibrary.map((exercise, i) => {
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
		<div className="border-x-2 border-indigo-500 px-4">
			<h3 className="border-b-2 border-indigo-500 flex justify-center mb-4">
				Library List
			</h3>
			<ul>{renderedList}</ul>
		</div>
	);
}

export default LibraryList;
