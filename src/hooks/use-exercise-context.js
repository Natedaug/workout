import { useContext } from "react";
import ExerciseContext from "../context/exercise";

function useExerciseContext() {
	return useContext(ExerciseContext);
}

export default useExerciseContext;
