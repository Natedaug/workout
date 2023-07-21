//routing
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserWorkoutPage from "./pages/UserWorkoutPage";

function App() {
	const router = createBrowserRouter([
		{ path: "/", element: <HomePage /> },
		{ path: "/userWorkout", element: <UserWorkoutPage /> },
	]);

	return <RouterProvider router={router} />;
}

export default App;
