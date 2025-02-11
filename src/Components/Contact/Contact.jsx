import { motion } from "framer-motion";
import styles from './Contact.module.css';

const Contact = () => {
    const containerVariant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const fieldVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <motion.div 
            className={styles.main} 
            variants={containerVariant} 
            initial="hidden" 
            animate="visible"
        >
            <motion.h2 
                className={styles.innerhead}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                Have a question or want to collaborate? Feel free to drop me a message! I&apos;ll get back to you as soon as possible.
            </motion.h2>
            <form action="https://formspree.io/f/mblddrpl" method="POST">
                <motion.div className={styles.field} variants={fieldVariant}>
                    <input name="Name" type="text" required />
                    <div className={styles.label}>Enter Name</div>
                </motion.div>

                <motion.div className={styles.field} variants={fieldVariant}>
                    <input name="Email" type="text" required />
                    <div className={styles.label}>Enter E-Mail</div>
                </motion.div>

                <motion.div className={styles.field} variants={fieldVariant}>
                    <textarea name="Message" required></textarea>
                    <div className={styles.label}>Message</div>
                </motion.div>
                <motion.button 
                variants={fieldVariant}
                className={styles.submitBtn}
                >Submit</motion.button>
            </form>
        </motion.div>
    );
};

export default Contact;
