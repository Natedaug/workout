import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import LibraryPage from "./pages/LibraryPage";
import MyWorkoutPage from "./pages/MyWorkoutPage";

import { libraryPath, myWorkoutPath } from "./pages/pathways";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ path: libraryPath, element: <LibraryPage /> },
			{ path: myWorkoutPath, element: <MyWorkoutPage /> },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
