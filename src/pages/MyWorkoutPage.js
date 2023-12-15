import { useEffect, useState } from "react";
import ExerciseCard from "../components/ExerciseCard";
import UserWorkoutList from "../components/usersWorkout/UserWorkoutList";
import useExerciseContext from "../hooks/use-exercise-context";

function MyWorkoutPage(props) {
	const { workoutList, fetchUserWorkoutList } = useExerciseContext();
	const [selectedWorkListItem, setSelectedWorkListItem] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			await fetchUserWorkoutList();
			// Set selectedWorkListItem after fetching data
			setSelectedWorkListItem(workoutList[0]);
		};

		fetchData();
	}, []);

	return (
		<>
			<div className="flex space-x-8 ml-4">
				<UserWorkoutList setSelectedWorkListItem={setSelectedWorkListItem} />

				{selectedWorkListItem ? (
					<ExerciseCard exercise={selectedWorkListItem} />
				) : (
					"Loading..."
				)}
			</div>
		</>
	);
}

export default MyWorkoutPage;
