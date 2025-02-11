import { motion } from 'framer-motion';
import { NavLink, Outlet } from 'react-router-dom';


import styles from './Projects.module.css';

const Projects = () => {
    return (
        <div className={styles.main}>
            <div className={styles.content}>
                <motion.nav 
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: .3, ease:"easeOut"}}
                className={styles.nav}>
                    <NavLink className={({isActive})=> isActive ? styles.active : "" } to={"reactProjects"}>
                        <h4>React Projects</h4>
                    </NavLink>
                
                    <NavLink className={({isActive})=> isActive ? styles.active : "" } to={"javascriptProjects"}>
                        <h4>JavaScript Projects</h4>
                    </NavLink>
                </motion.nav>
                <Outlet />
            </div>
        </div>
    );
};

export default Projects;
