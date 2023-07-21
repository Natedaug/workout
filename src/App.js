//routing
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import UserWorkoutPage from "./pages/UserWorkoutPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{ path: "/", element: <HomePage /> },
			{ path: "/userWorkout", element: <UserWorkoutPage /> },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
