import { Link } from "react-router-dom";

function Navbar(props) {
	return (
		<div>
			<Link to="/">Home</Link>
			<Link to="/userWorkout">My Workout</Link>
		</div>
	);
}

export default Navbar;
