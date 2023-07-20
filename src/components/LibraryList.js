import LibraryListItem from "./LibraryListItem";

function LibraryList({ exerciseLibrary, addExercise, activeFilters }) {
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
					index={i}
					exercise={exercise}
					addExercise={addExercise}
				/>
			);
		}
	});

	return <ul>{renderedList}</ul>;
}

export default LibraryList;
