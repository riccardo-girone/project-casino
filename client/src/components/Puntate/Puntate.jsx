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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla tellus at nibh sagittis mattis. Fusce pulvinar nisl dictum lacus posuere porta. Mauris commodo velit magna, sed pulvinar dolor aliquet at. Vestibulum diam odio, condimentum in orci sed, aliquam bibendum nulla.
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