import { Link } from "react-router-dom";
import { libraryPath, userWorkoutPath } from "../pages/pathways";
function Navbar() {
	const routes = [
		{ label: "Home", path: libraryPath },
		{ label: "My Workout", path: userWorkoutPath },
	];

	const renderedRoutes = routes.map((route, i) => (
		<li key={i} className="pr-8">
			<Link to={route.path}>
				<span className="hover:text-white">{route.label}</span>
			</Link>
		</li>
	));

	return (
		<header>
			<nav className="bg-indigo-700 text-indigo-100 text-lg font-semibold py-2 pl-150">
				<ul className="flex justify-center">{renderedRoutes}</ul>
			</nav>
		</header>
	);
}

export default Navbar;
