function ExcerciseCard(props) {
	const { label, difficulty, video, steps, tags, target } = props.exercise;

	//example-> target{"Primaray":["biceps", "forearms"],"Secondary":["glutes","thumb"]}
	//https://stackoverflow.com/questions/39965579/how-to-loop-an-object-in-react
	const renderedTarget = Object.keys(target).map((key) => {
		return (
			<li key={key} className="flex">
				{key} -
				{target[key].map((targetItem, i) => (
					<i key={i} className="pl-2">
						{targetItem}
					</i>
				))}
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
				<div>
					<h4>
						<strong className="mr-2 font-bold">Difficulty:</strong>
						<i>{difficulty}</i>
					</h4>
				</div>
				<div className="flex">
					<h4>
						<strong className="mr-2 font-bold">Target Area:</strong>
					</h4>
					<ul>{renderedTarget}</ul>
				</div>
			</div>
			<div className="mb-4">
				<h4>
					<strong className="my-8 font-bold">Instructions:</strong>
				</h4>
				<ul>
					{steps.map((step, i) => (
						<li key={i}> - {step}</li>
					))}
				</ul>
			</div>
			<div>
				<i className="text-indigo-700 font-bold text-md">{`#${tags}`}</i>
			</div>
		</div>
	);
}

export default ExcerciseCard;
