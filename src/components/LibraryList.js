function LibraryList({ exerciseLibrary, addExercise }) {
  const handleAdd = (exercise) => {
    addExercise(exercise);
  };

  const renderedList = exerciseLibrary.map((exercise, i) => {
    return (
      <li key={i}>
        {exercise.label}
        <button onClick={() => handleAdd(exercise)}>+</button>
      </li>
    );
  });

  return <ul>{renderedList}</ul>;
}

export default LibraryList;
