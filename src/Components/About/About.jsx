import Education from '../Education/Education';
import Hero from '../Hero/Hero';
import Skills from '../Skills/Skills';
import { AnimatePresence, motion } from 'framer-motion';
const About = () => {
    return (
        <AnimatePresence>
            <motion.div
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}
                transition={{duration:1}}
            >
                <Hero />
                <Education />
                <Skills />
            </motion.div>
        </AnimatePresence>
    )
}
export default About;