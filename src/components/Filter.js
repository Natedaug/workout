function Filter() {
	const handleFilter = () => {
		console.log("inside filter");
	};

	return (
		<div>
			<label htmlFor="cardio">Cardio</label>
			<input id="cardio" type="checkbox" />

			<label htmlFor="weights">Weights</label>
			<input id="weights" type="checkbox" />

			<label htmlFor="all">All</label>
			<input id="all" type="checkbox" />

			<button onClick={handleFilter}>Filter</button>
		</div>
	);
}

export default Filter;
