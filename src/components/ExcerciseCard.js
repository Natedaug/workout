function ExcerciseCard(props) {
	const { label, difficulty, video, description, tags } = props.exercise;

	return (
		<div>
			<h3>{label}</h3>
			<img src="https://placehold.co/100" alt={`${label}`} />
			<h4>{`Difficulty: ${difficulty}`}</h4>
			<a href={video} target="_blank" rel="noreferrer">{`See Video`}</a>
			<div>
				<p>{description}</p>
			</div>
			<div>{`#${tags}`}</div>
		</div>
	);
}

export default ExcerciseCard;
