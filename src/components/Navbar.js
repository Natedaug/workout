import { Link } from "react-router-dom";

function Navbar() {
	const routes = [
		{ label: "Home", path: "/" },
		{ label: "My Workout", path: "/userWorkout" },
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
