import UserWorkoutList from "../components/usersWorkout/UserWorkoutList";

function UserWorkoutPage(props) {
	return (
		<div>
			<div>
				<div className="flex space-x-8 ml-4">
					<UserWorkoutList />
				</div>
			</div>
		</div>
	);
}

export default UserWorkoutPage;
