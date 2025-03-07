import styles from './Skills.module.css';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const Skills = () => {
    const skill = [
        { skill: "JAVASCRIPT", skillimg: "/images/javascript.png", color: "#F0DB4F" },
        { skill: "REACTJS", skillimg: "/images/reactjs.png", color: "#61DBFB" },
        { skill: "TAILWIND", skillimg: "/images/tailwind.png", color: "#38BDF8" },
        { skill: "FIGMA", skillimg: "/images/figma.png", color: "#F24E1E" },
        { skill: "BOOTSTRAP", skillimg: "/images/bootstrap.png", color: "#7952B3" },
        { skill: "REDUX", skillimg: "/images/redux.png", color: "#764ABC" },
        { skill: "GITHUB", skillimg: "/images/github.png", color: "#fff" },
        { skill: "JAVA", skillimg: "/images/java.png", color: "#F89820" },
        { skill: "CSS", skillimg: "/images/css.png", color: "#2965F1" },
        { skill: "HTML", skillimg: "/images/html.png", color: "#E34C26" },
        { skill: "GSAP", skillimg: "/images/gsap.png", color: "#88CE02" }
    ];

    return (
        <div className={styles.main}>
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={styles.head}>
                {"SKILLS".split("").map((child, idx) => (
                    <span className={styles.hoverText} key={idx}>
                        {child}
                    </span>
                ))}
            </motion.h1>
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }} 
                className={styles.container}
            >
                {skill.map((ele, idx) => (
                    <Tilt
                        tiltEnable={true}
                        tiltReverse={true}
                        glareEnable={true}
                        glareReverse={true}
                        glareMaxOpacity={0.8}
                        glareBorderRadius="10px"
                        transitionEasing="cubic-bezier(.17,.67,.83,.67)"
                        transitionSpeed={200}
                        tiltMaxAngleX={15}
                        tiltMaxAngleY={15}
                        perspective={800}
                        gyroscope={true}
                        glareColor={`${ele.color}`}
                        key={idx}
                        className={styles.skilldiv}
                    >
                        <img src={ele.skillimg} alt="" />
                        <h1>{ele.skill}</h1>
                    </Tilt>
                ))}
            </motion.div>
        </div>
    );
};

export default Skills;
