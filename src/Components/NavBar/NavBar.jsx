import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from './NavBar.module.css';

const NavBar = () => {
    const [isActive, setIsActive] = useState(false);

    const onHamClick = () => {
        setIsActive(!isActive);
    };

    const onNavClick = () => {
        setIsActive(false)
    }


    useEffect(()=>{
        if(isActive){
            document.body.style.overflow = "hidden";
            document.body.style.height = "100vh";  
            document.body.style.position = "fixed"; 
            document.body.style.width = "100%";  
        }
        else{
            document.body.style.overflow = "auto";
            document.body.style.height = "auto";
            document.body.style.position = "static";
        }
    },[isActive])

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
                        initial={{opacity: 0, x: -10}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: .6, delay: .5}}
                        className={styles.closeBtn} 
                        onClick={onNavClick}>
                        <svg
                            width="40px"
                            height="40px"
                            viewBox="0 0 25.00 25.00"
                            fill="none"
                            stroke="#fff"
                            strokeWidth="0.00025"
                            transform="matrix(-1, 0, 0, -1, 0, 0)"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                            <g id="SVGRepo_iconCarrier">
                                <path
                                d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z"
                                fill="#fff"
                                />
                            </g>
                        </svg>

                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            onClick={onNavClick}
                        >
                            <NavLink to={"/"}>Home</NavLink>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                            onClick={onNavClick}
                        >
                            <NavLink to={"/projects"}>Projects</NavLink>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.3, delay: 0.4 }}
                            onClick={onNavClick}
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
