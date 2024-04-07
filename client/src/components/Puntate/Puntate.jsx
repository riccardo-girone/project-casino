import styles from './Puntate.module.scss'
import CodeEx from './codeExplenetion/CodeEx'
import Footer from '../footer/Footer.jsx';

export default function Puntate() {
    return (
        <>
            <div className={styles.containerWrapper}>
                <div className={styles.leftContent}>
                    <div className={styles.class}>Puntate</div>

                    <div className={styles.textContainer}>
                        <div className={styles.text}>
                            il sistema di scommesse è suddiviso in 2 parti distinte: la parte di scrittura nel file e la parte di aggiunta dei crediti al contatore.
                           
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