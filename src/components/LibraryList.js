function LibraryList({
	exerciseLibrary,
	addExercise,
	activeFilters,
	setShowModal,
}) {
	const handleAdd = (exercise) => {
		addExercise(exercise);
	};

	const getInfo = (event) => {
		setShowModal(true);
	};

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
				<li key={i}>
					{exercise.label}
					<button class="button" onClick={getInfo}>
						Info
					</button>
					<button onClick={() => handleAdd(exercise)}>+</button>
				</li>
			);
		}
	});

	return <ul>{renderedList}</ul>;
}

export default LibraryList;
