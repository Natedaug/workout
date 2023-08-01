import { Link } from "react-router-dom";
import { libraryPath, userWorkoutPath } from "../pages/pathways";
function Navbar() {
	const routes = [
		{ label: "Home", path: libraryPath },
		{ label: "My Workout", path: userWorkoutPath },
	];

	const renderedRoutes = routes.map((route, i) => (
		<li key={i}>
			<Link to={route.path}>{route.label}</Link>
		</li>
	));

	return (
		<header>
			<nav>
				<ul>{renderedRoutes}</ul>
			</nav>
		</header>
	);
}

export default Navbar;
