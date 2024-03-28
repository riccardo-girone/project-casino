import styles from './Footer.module.scss';


export default function Footer() {
    return(
        <div className={styles.container}>
            <div className={styles.navContent}>
                <a 
                    target="_blank"
                    href="https://github.com/Fabio-Telloli/Cavallos-Centrer-cassino">
                    <h2 className={styles.text}>project made by Telloli & Girone</h2>
                </a>

                <h2 className={styles.text}>|</h2>
                    
                <a 
                    target="_blank"
                    href="https://github.com/riccardo-girone/project-casino">
                    <h2 className={styles.text}>website made by Girone</h2>
                </a>
            </div>
        </div>
    );
}