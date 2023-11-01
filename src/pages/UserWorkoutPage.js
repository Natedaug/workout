import { useEffect, useState } from "react";
import ExerciseCard from "../components/ExerciseCard";
import UserWorkoutList from "../components/usersWorkout/UserWorkoutList";
import useExerciseContext from "../hooks/use-exercise-context";

function UserWorkoutPage(props) {
	const { workoutList, fetchworkoutList } = useExerciseContext();
	const [selectedWorkListItem, setSelectedWorkListItem] = useState(0);

	useEffect(() => {
		fetchworkoutList();
	}, []);

	const userSelectedExcercise = workoutList[selectedWorkListItem];

	return (
		<>
			<div className="flex space-x-8 ml-4">
				<UserWorkoutList setSelectedWorkListItem={setSelectedWorkListItem} />

				{workoutList.length === 0 ? (
					"Loading ..."
				) : (
					<>
						{selectedWorkListItem}

						{<ExerciseCard exercise={userSelectedExcercise} />}
					</>
				)}
			</div>
		</>
	);
}

export default UserWorkoutPage;
