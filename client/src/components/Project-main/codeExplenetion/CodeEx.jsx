import styles from './CodeEx.module.scss';

export default function CodeEx() {
    return(
        <div className={styles.container}>
            <div className={styles.title}>
                <div>01. main minimale</div>
            </div>

            <div className={styles.contentContainer}>
                <div className={styles.contentText}>
                    <div>
                      Vestibulum diam odio, condimentum in orci sed, aliquam bibendum amet, consectetur adipiscing elit. Pellentesque fringilla tellus at nibh sagittis mattis. Fusce pulvinar nisl dictum lacus posuere porta. Mauris commodo velit magna, sed pulvinar dolor aliquet at. Vestibulum diam odio, condimentum in orci sed, aliquam bibendum nulla. adipiscing elit. Pellentesque fringilla tellus at nibh sagittis mattis. Fusce pulvinar nisl dictum lacus posuere porta. Mauris commodo velit magna, sed pulvinar
                    </div>
                </div>

                <div className={styles.codeWrapper}>
                    <div className={styles.codeContainer}>

                    </div>
                </div>
            

                <div className={styles.contentText}>
                    <div>
                        Pellentesque fringilla tellus at nibh sagittis mattis. Fusce pulvinar nisl dictum lacus posuere porta. Mauris commodo velit magna, sed pulvinar dolor aliquet at. Vestibulum diam odio, condimentum in orci sed, aliquam bibendum nulla. adipiscing elit. Pellentesque fringilla tellus at nibh sagittis mattis. Fusce pulvinar nisl dictum lacus posuere porta. Mauris commodo velit magna, sed pulvinar dolor aliquet at. Vestibulum diam odio, condimentum in orci sed, aliquam bibendum
                    </div>
                </div>
            </div>
        </div>
    );
}