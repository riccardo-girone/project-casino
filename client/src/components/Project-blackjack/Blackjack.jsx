import styles from './Blackjack.module.scss';
import CodeEx from './codeExplenetion/CodeEx'
import Footer from '../footer/Footer.jsx';

export default function Roulette() {
    return (
        <>
            <div className={styles.containerWrapper}>
                <div className={styles.leftContent}>
                    <div className={styles.class}>class</div>
                    <div className={styles.class}>Bj</div>
                </div>

                <div className={styles.rightContainer}>
                    <img src="/project-img/img1-b.png" alt="img" />
                </div>
            </div>

            <CodeEx/>
            <Footer/>
        </>
    );
}