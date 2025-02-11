import styles from './JavascriptProject.module.css'
import { motion } from 'framer-motion';
import { JSProjects } from '../../Utils/JSProjects';
import ThreeCards from '../ThreeCards/ThreeCards';
const JavascriptProject = () => {
    return (
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration: 1}}
        className={styles.main}>
            {
                JSProjects.map((props,idx) => <ThreeCards key={idx} {...props} />)
            }
        </motion.div>
    )
}
export default JavascriptProject;