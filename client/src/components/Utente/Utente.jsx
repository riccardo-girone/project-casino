import styles from './Utente.module.scss';
import CodeEx from './codeExplenetion/CodeEx'
import Footer from '../footer/Footer.jsx';

export default function Utente() {
    return (
        <>
            <div className={styles.containerWrapper}>
                <div className={styles.leftContent}>
                    <div className={styles.class}>class</div>
                    <div className={styles.class}>Utente</div>
                </div>

                <div className={styles.rightContainer}>
                    <img src="/project-img/img5-u.png" alt="img" />
                </div>
            </div>

            <CodeEx/>
            <Footer/>
        </>
    );
}