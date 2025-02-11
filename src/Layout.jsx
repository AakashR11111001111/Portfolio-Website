import { Outlet } from "react-router-dom";
import BlurBackground from "./Components/BlurBackground/BlurBackground";
import NavBar from "./Components/NavBar/NavBar";

const Layout = () => {
    return (
        <>
            <BlurBackground />
            <NavBar />
            <Outlet />
        </>
    )
}
export default Layout;