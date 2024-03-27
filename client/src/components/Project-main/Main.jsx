import styles from './Main.module.scss';

export default function Main() {
    return(
        <div className={styles.containerWrapper}>
            <div className={styles.leftContent}>
                <div className={styles.class}>class</div>
                <div className={styles.class}>main</div>
            </div>
        </div>
    );
}