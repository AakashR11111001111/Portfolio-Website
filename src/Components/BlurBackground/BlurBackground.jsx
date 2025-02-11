import styles from './BlurBackground.module.css'
import { motion } from "framer-motion";
const circle = {
    animate: {
        scale: [1,1.2, 1],
        x: [0, 100, 0],
        y: [0, 50, 0],
        transition: {
            duration : 2, 
            repeat: Infinity,
            ease: "easeInOut"
        }
    },
    animate2: {
        scale: [1, 1.1, 1],
        x: [0, 120, 0],
        y: [0, -60, 0],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }
    },
    animate3: {
        scale : [1, 1.3, 1],
        x: [0, 140 , 0],
        y: [0, 70, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
        }
    },
    animate4: {
        scale : [1, 1.4, 1],
        x: [0, 160, 0],
        y: [0, -80, 0],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
        }
    },
    animate5: {
        scale : [1, 1.5, 1],
        x: [0, 180 , 0],
        y: [0, 90, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
        }
    },
    animate6: {
        scale : [1, 0.6, 1],
        x: [0, 200 , 0],
        y: [0, -100, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
}
const BlurBackground = () => {
    return (
        <>
            <div className={styles.bbgmain}>
                <motion.div className={styles.md1} variants={circle} animate="animate"></motion.div>
                <motion.div className={styles.md2} variants={circle} animate="animate2"></motion.div>
                <motion.div className={styles.md3} variants={circle} animate="animate3"></motion.div>
                <motion.div className={styles.md4} variants={circle} animate="animate4"></motion.div>
                <motion.div className={styles.md5} variants={circle} animate="animate5"></motion.div>
                <motion.div className={styles.md6} variants={circle} animate="animate6"></motion.div>
            </div>
        </>
    )
}
export default BlurBackground;