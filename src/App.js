import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import LibraryPage from "./pages/LibraryPage";
import ErrorPage from "./pages/ErrorPage";
import UserWorkoutPage from "./pages/UserWorkoutPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ path: "/", element: <LibraryPage /> },
			{ path: "/userWorkout", element: <UserWorkoutPage /> },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
