import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function RootLayout(props) {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
}

export default RootLayout;
