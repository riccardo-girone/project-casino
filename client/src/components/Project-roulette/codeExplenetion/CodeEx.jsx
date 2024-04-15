import styles from './CodeEx.module.scss';

export default function CodeEx() {
    return(
        <div className={styles.container}>
            <div className={styles.title}>
                <div>funzionamento della roulette</div>
            </div>

            <div className={styles.contentContainer}>
                <div className={styles.contentText}>
                    <div>
                        1) <code>play()</code>: il metodo play innanzitutto serve a far vedere il menu, dopo di che tramite uno [switch case] possiamo scegliere tutti i vari casi              
                    </div>
                        <div className={styles.codeWrapper}>
                            <img src="/project-img/img3-r.png" alt="img" />
                        </div>
                    <div>
                        2) <code>coloreRoulette</code>: la classe colore serve a generare un colore casuale tra nero e rosso e lo converte in 0 e 1, e grazie ad un if riesce a determinare il colore 

                    </div>
                        <div className={styles.codeWrapper}>
                            <img src="/project-img/img3-r.png" alt="img" />
                        </div>
                    <div>
                        3)<code>numeriMultipli</code>: Questo codice gestisce le puntate su numeri multipli alla roulette e determina se l'utente ha vinto o perso, aggiornando il saldo dell'utente di conseguenza.
                    </div>

                    <div className={styles.codeWrapper}>
                        <img src="/project-img/img4-r.png" alt="img" />
                    </div>
                </div>
            </div>
        </div>
    );
}