// import ThreeCards from '../ThreeCards/ThreeCards';
import Tilt from 'react-parallax-tilt'
import styles from './ReactProject.module.css'

import { motion } from 'framer-motion';
import ThreeCards from '../ThreeCards/ThreeCards';

const ReactProject = () => {
    return (
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration: 1}}
        className={styles.main}
        >
            <ThreeCards />
        </motion.div>
    )
}
export default ReactProject;