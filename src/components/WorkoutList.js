function WorkoutList({ workoutList, deleteExercise }) {
  const handleDelete = (exercise) => {
    deleteExercise(exercise);
  };

  const renderedList = workoutList.map((exercise, i) => {
    return (
      <li key={i}>
        {exercise.label}
        <button onClick={() => handleDelete(exercise)}>-</button>
      </li>
    );
  });

  return <ol>{renderedList}</ol>;
}

export default WorkoutList;
