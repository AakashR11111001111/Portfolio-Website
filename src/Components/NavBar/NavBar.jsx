import { NavLink } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from './NavBar.module.css';

const NavBar = () => {
    const [isActive, setIsActive] = useState(false);

    const onHamClick = () => {
        setIsActive(!isActive);
    };

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

        
            <AnimatePresence>
                {isActive && (
                    <motion.div 
                        className={styles.menu}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                        >
                            <NavLink to={"/"}>Home</NavLink>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                        >
                            <NavLink to={"/about"}>About</NavLink>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.3, delay: 0.3 }}
                        >
                            <NavLink to={"/projects"}>Projects</NavLink>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.3, delay: 0.4 }}
                        >
                            <NavLink to={"/contact"}>Contact</NavLink>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default NavBar;
