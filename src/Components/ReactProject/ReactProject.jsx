import Tilt from 'react-parallax-tilt'
import styles from './ReactProject.module.css'

import { motion } from 'framer-motion';
import ThreeCards from '../ThreeCards/ThreeCards';
import { ReactJSProjects } from '../../Utils/ReactJSProjects';

const ReactProject = () => {
    return (
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration: 1}}
        className={styles.main}
        >
            {
                ReactJSProjects.map((ele, idx) => <ThreeCards key={idx} {...ele} />)
            }
        </motion.div>
    )
}
export default ReactProject;