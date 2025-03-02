import { NavLink } from "react-router-dom";

import styles from './NavBar.module.css';

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.navinner}>
                <div className={styles.navs}>
                    <NavLink to={"/"}>Aakash Rathore</NavLink>
                </div>
                <div className={styles.navL}>
                    <NavLink className={({ isActive }) => isActive ? styles.active : ""} to={"/"}>About</NavLink>
                    <NavLink className={({ isActive }) => isActive ? styles.active : ""} to={"/projects"}>Projects</NavLink>
                    <NavLink className={({ isActive }) => isActive ? styles.active : ""} to={"/contact"}>Contact</NavLink>
                </div>
            </div>
        </nav>
    )
}
export default NavBar;