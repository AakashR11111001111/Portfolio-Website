import styles from './ThreeCards.module.css';
import Tilt from 'react-parallax-tilt';
const ThreeCards = (props) => {
    return (
           <>
            <Tilt 
            perspective={800}
            glareEnable={true}
            glareMaxOpacity={0.5}
            tiltMaxAngleX={12}
            tiltMaxAngleY={12}
            scale={1.1}
            glareBorderRadius='10px'
            className={styles.card}>
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
                <img src={props.thumbnail} alt="" />
                <div className={styles.btns}>
                    <a href={props.liveLink} target='_blank'>
                        <button className={styles.liveBtn}>Live</button>
                    </a>
                    <a href={props.gitLink} target='_blank'>
                        <button className={styles.gitBtb}><img src="/Icons/git.png" alt="" />GitHub</button>
                    </a>
                </div>
            </Tilt>
           </>
    )
}
export default ThreeCards;