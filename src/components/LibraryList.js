function LibraryList({ exerciseLibrary, addExercise, activeFilters }) {
	const handleAdd = (exercise) => {
		addExercise(exercise);
	};

	const renderedList = exerciseLibrary.map((exercise) => {
		console.log(exercise.id);
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
				<li key={exercise.id}>
					{exercise.label}
					<button onClick={() => handleAdd(exercise)}>+</button>
				</li>
			);
		}
	});

	return <ul>{renderedList}</ul>;
}

export default LibraryList;
