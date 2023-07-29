function ExcerciseCard(props) {
	const { label, difficulty, video, steps, tags, target } = props.exercise;

	//example-> target{"Primaray":["biceps", "forearms"],"Secondary":["glutes","thumb"]}
	//https://stackoverflow.com/questions/39965579/how-to-loop-an-object-in-react
	const renderedTarget = Object.keys(target).map((key) => {
		return (
			<li key={key} className="flex">
				{key}:
				<ul>
					{target[key].map((targetItem, i) => (
						<li key={i}>{targetItem}</li>
					))}
				</ul>
			</li>
		);
	});

	return (
		<div>
			<h3 className="text-center mb-4 text-indigo-500 font-bold text-xl">
				{label}
			</h3>
			<a href={video} target="_blank" rel="noreferrer">
				<video controls="" autoPlay={true} name="media">
					<source src={video} type="video/mp4" />
				</video>
			</a>
			<div className="flex justify-around my-4">
				<h4>{`Difficulty: ${difficulty}`}</h4>
				<div className="flex">
					<h3>Target Area:</h3>
					<ul>{renderedTarget}</ul>
				</div>
			</div>
			<div className="mb-4">
				<h3>Instructions:</h3>
				<ul>
					{steps.map((step, i) => (
						<li key={i}> - {step}</li>
					))}
				</ul>
			</div>
			<div>{`#${tags}`}</div>
		</div>
	);
}

export default ExcerciseCard;
