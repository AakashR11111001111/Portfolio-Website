import styles from './MiscProject'

import { motion } from 'framer-motion';

const MiscProject = () => {
    return (
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration: 1}}
        className={styles.main}
        >
            <h1>Misc Project</h1>
        </motion.div>
    )
}
export default MiscProject;