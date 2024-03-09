import styles from './Nav.module.scss'

export default function Nav() {
    return(
        <div>
            <div className={styles.navContainer}>
                <div className={styles.nav}></div>
            </div>
        </div>
    );
}