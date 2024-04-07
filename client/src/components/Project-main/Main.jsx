import styles from './Main.module.scss';
import CodeEx from './codeExplenetion/CodeEx'
import Footer from '../footer/Footer.jsx';

export default function Main() {
    return (
        <>
            <div className={styles.containerWrapper}>
                <div className={styles.leftContent}>
                    <div className={styles.class}>Intro</div>
                    

                    <div className={styles.textContainer}>
                        <div className={styles.text}> 
                            Per questo progetto, ci siamo immersi nel mondo dei giochi da casinò, sviluppando in Java un'esperienza coinvolgente. Abbiamo implementato due classici: la roulette e il blackjack, arricchendoli con un sistema di puntate e di registrazione dei giocatori.
                        </div>
                    </div>
                </div>

                <div className={styles.rightContainer}>
                    <div className={styles.placeolder}></div>
                </div>
            </div>

            <CodeEx/>
            <Footer/>
        </>
    );
}