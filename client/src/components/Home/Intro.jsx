
import styles from './Intro.module.scss';

export default function Intro() {
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.textContainer}>
                    <div className={styles.text1}>project</div>
                    <div className={styles.text2}>casino</div>
                    <div className={styles.text3}>project</div>
                    <div className={styles.text4}>casino</div>
                </div>

                <div className='img'>

                </div>
            </div>

            <div className={styles.explore}>
                <div>explore</div>
            </div>
        </div>
    );
}