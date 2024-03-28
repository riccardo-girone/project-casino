import styles from './Footer.module.scss';

export default function Footer() {
    return(
        <div className={styles.container}>
            <div className={styles.navContent}>
                <h2>project made by Telloli & Girone | website made by Girone</h2>
            </div>
        </div>
    );
}