import styles from './Intro.module.scss';
import Link from 'next/link'

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
            </div>

            <div className={styles.nameContainer}>
                <div className={styles.gironeWrapper}>
                    <div>GIRONE</div>
                    <div>GIRONE</div>
                    <div>GIRONE</div>
                </div>

                <div className={styles.telloliWrapper}>
                    <div>TELLOLI</div>
                    <div>TELLOLI</div>
                    <div>TELLOLI</div>
                </div>
            </div>

            <div className={styles.imgContainer}>
                <img className={styles.img1} src="./home-img/img1.jpg" alt="img"/>
                <img className={styles.img2} src="./home-img/img2.jpg" alt="img"/>
            </div>

            <div className={styles.arrowRedirect}>
                <Link href="/gallery"> 
                    <div className={styles.explore}>
                        <div>explore</div>
                    </div>

                    <img className={styles.arrow} src="./icon/down-arrow.png" alt="arrow"/>
                </Link>
            </div>
        </div>
    );
}