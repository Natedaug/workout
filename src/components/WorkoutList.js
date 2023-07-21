import useExerciseContext from "../hooks/use-exercise-context";

function WorkoutList() {
	const { workoutList, deleteExercise } = useExerciseContext();

	const handleDelete = (exercise) => {
		deleteExercise(exercise);
	};

	const renderedList = workoutList.map((exercise, i) => {
		return (
			<li key={i} className="my-2 flex justify-between">
				{exercise.label}
				<button
					className="rounded-full ml-4 border-2 border-indigo-500 bg-indigo-300 px-4"
					onClick={() => handleDelete(exercise)}
				>
					-
				</button>
			</li>
		);
	});

	return (
		<div className="border-x-2 border-indigo-500 px-4">
			<h3 className="border-b-2 border-indigo-500 flex justify-center mb-4">
				User Workout List
			</h3>
			<ol>{renderedList}</ol>
		</div>
	);
}

export default WorkoutList;
