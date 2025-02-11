import { motion } from "framer-motion";
import Typed from "typed.js";
import styles from './Hero.module.css';
import { useEffect, useRef } from "react";

const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const containerVariant = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
        }
    }
};

const imageVariants = {
    hidden: { x: "100px", opacity: 0 },
    visible: { x: "0", opacity: 1, transition: { duration: 1, ease: "easeOut" } },
};

const iconVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.2 } },
};

const Hero = () => {
    const typeRef = useRef(null);

    const onResumeDownloadBtn = () => {
        window.open("/Resume.pdf", "_blank");
    }

    useEffect(() => {
        if (typeRef.current) {
            const options = {
                strings: ["I'm Aakash Rathore","I'm Web Developer","I'm Frontend Developer"],
                typeSpeed: 100,
                backSpeed: 100,
                loop: true,
            };
            const typed = new Typed(typeRef.current, options);
            return () => typed.destroy();
        }
    }, []);

    return (
        <section>
            <div className={styles.main}>
                <motion.div initial="hidden" animate="visible" variants={containerVariant} className={styles.md1}>
                    <motion.h1 variants={textVariants} className={styles.heroHead}>
                        <span ref={typeRef}></span>
                    </motion.h1>
                    <motion.p variants={textVariants} className={styles.herop1}>Passionate about creating innovative digital solutions with a focus on functionality and design.</motion.p>
                    <motion.p variants={textVariants} className={styles.herop2}>Let&apos;s work together! Contact me for your next project.</motion.p>
                    <motion.button variants={textVariants} onClick={onResumeDownloadBtn} className={styles.resumebtn}>Download Resume</motion.button>
                    <motion.div 
                    initial={{opacity: 0, y: 15}}
                    animate={{opacity:1 , y: 0}}
                    transition={{
                        duration: .5,
                        staggerChildren: 0.3
                    }} 
                    className={styles.links}>
                        <motion.a variants={iconVariants} href="https://www.linkedin.com/in/aakash-rathore-011695210/" target="_blank" className={styles.linkedin}>
                            <svg  viewBox="0 0 48 48" width="40px" height="40px"><path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"/><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"/></svg>
                        </motion.a>
                        <motion.a variants={iconVariants} href="https://mail.google.com/mail/?view=cm&fs=1&to=aakashrathore1613@gmail.com" target="_blank" className={styles.gmail}>
                            <svg viewBox="0 0 48 48" width="40px" height="40px"><path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"/><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"/><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"/><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"/><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"/></svg>
                        </motion.a>
                        <motion.a variants={iconVariants} className={styles.github} href="https://github.com/aakashr11111001111" target="_blank">
                            <svg viewBox="0 0 24 24" width="35px" height="35px"><path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"/></svg>
                        </motion.a>
                    </motion.div>
                </motion.div>
                <motion.div initial="hidden" animate="visible" variants={imageVariants} className={styles.imgContainer}>
                    <motion.img
                    drag
                    whileDrag={{scale: 1.1}}
                    dragConstraints={{left: -100, right: 100, top: -100, bottom: 100}}
                    dragSnapToOrigin 
                    dragTransition={{
                        type: "spring",
                        stiffness: 1000, 
                        damping: 15, 
                    }}
                    src="/cartooned.png" alt="Boy coding on a laptop" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
