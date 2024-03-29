import styles from './CodeEx.module.scss';

export default function CodeEx() {
    return(
        <div className={styles.container}>
            <div className={styles.title}>
                <div className={styles.titleText}>01 main minimale</div>
            </div>

            <div className={styles.content1}>
                <div className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla tellus at nibh sagittis mattis. Fusce pulvinar nisl dictum lacus posuere porta. Mauris commodo velit magna, sed pulvinar dolor aliquet at. Vestibulum diam odio, condimentum in orci sed, aliquam bibendum nulla.</div>
            </div>

            <div className={styles.codeContainer}></div>

            <div className={styles.content2}>
                <div className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla tellus at nibh sagittis mattis. Fusce pulvinar nisl dictum lacus posuere porta. Mauris commodo velit magna, sed pulvinar dolor aliquet at. Vestibulum diam odio, condimentum in orci sed, aliquam bibendum nulla.</div>
            </div>
        </div>
    );
}