import styles from './Education.module.css';
import { motion } from 'framer-motion';

const Education = () => {
    return (
        <div className={styles.container}>
            <main className={styles.row}>
                <section className={styles.col}>
                    <motion.header 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 1 }}
                        className={styles.title}>
                        <h1>{"EDUCATIONAL-QUALIFICATION".split("").map((child, idx) => (
                                        <span className={styles.hoverText} key={idx}>
                                          {child}
                                        </span>
                        ))}</h1>
                    </motion.header>
                    <div className={styles.contents}>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileHover={{transform:"translateY(-10px)"}}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.3 }}
                            className={styles.box}>
                            <h4>2018</h4>
                            <h3>12th Grade (Commerce with IP)</h3>
                            <p>MCL SBM, CBSE Board, Achieved 60% aggregate.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileHover={{transform:"translateY(-10px)"}}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className={styles.box}>
                            <h4>2019 - 2022</h4>
                            <h3>Bachelor of Computer Applications (BCA)</h3>
                            <p>Maharaja Surajmal Institute, Achieved 85.7% aggregate.</p>
                        </motion.div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Education;
