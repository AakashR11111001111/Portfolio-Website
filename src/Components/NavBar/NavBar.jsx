import { NavLink } from "react-router-dom";

import styles from './NavBar.module.css';
import { useState } from "react";

const NavBar = () => {
    const [isActive, setIsActive] = useState(false);

    const onHamClick = () => {
        setIsActive(!isActive);
    }
    return (
        <>
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
        <nav className={styles.nav2}>
            <div onClick={onHamClick} className={`${styles.hamburger} ${styles.islg} ${isActive ? styles.isActive : ""}`}>
                <span className={styles.hamburgerLine}></span>
                <span className={styles.hamburgerLine}></span>
                <span className={styles.hamburgerLine}></span>
            </div>
        </nav>
        </>
    )
}

export default NavBar;
