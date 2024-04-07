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
                        la classe Main è veramente semplice e concisa, istanziando la classe Utenti e
                        richiamando il metodo <code>estione()</code> possiamo dare il via al gioco.
                        La caratteristica è che quando istanzio la classe utenti devo passargli un parametro
                        che indica il nome del file su cui andrà a salvare tutte le registrazioni.
                    </div>
                </div>

                <div className={styles.codeWrapper}>
                    <div className={styles.codeContainer}>

                    </div>
                </div>
            </div>
        </div>
    );
}