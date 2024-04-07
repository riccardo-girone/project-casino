import styles from './CodeEx.module.scss';

export default function CodeEx() {
    return(
        <div className={styles.container}>
            <div className={styles.title}>
                <div>01. scrittura nel file</div>
            </div>

            <div className={styles.contentContainer}>
                <div className={styles.contentText}>
                    <div>
                        per scrivere nel file ho usato <code>BufferedReader</code> e <code>FileReader</code>, con queste 2 funzioni e' stato possibile scrivere all' interno del file.
                    </div>
                </div>

                <div className={styles.codeWrapper}>
                    <img src="/project-img/img1-p.png" alt="img" />
                </div>
            

                <div className={styles.contentText}>
                    <div>
                        <code>while ((line = reader.readLine()) != null)</code>: Questo ciclo legge una riga alla volta dal file di input tramite un oggetto BufferedReader chiamato reader. La condizione != null controlla se ci sono ancora righe da leggere.
                    </div>

                    <div>
                        <code>if (line.contains(email))</code>: Questa istruzione verifica se la riga corrente contiene la stringa email. Questo è probabilmente un modo per individuare una riga specifica del file che corrisponde all'email fornita.
                    </div>

                    <div>
                        <code>line = email + " " + password + " " + crediti;</code>: Se la riga contiene l'email, viene riscritta includendo l'email stessa, la password e il numero di crediti separati da spazi. Questa sembra essere una forma di aggiornamento dei dati associati all'email nel file.
                    </div>

                    <div>
                        <code>writer.write(line + "\n");</code>: Scrive la riga, eventualmente modificata, nel file di output utilizzando un oggetto BufferedWriter chiamato writer. Ogni riga è seguita da un carattere di nuova riga (\n).
                    </div>
                </div>
            </div>


            <div className={styles.contentContainer}>
                <div className={styles.title}>
                    <div>02. aggiunta crediti</div>
                </div>

                <div className={styles.contentText}>
                    <div>
                        per aggiungere i crediti e' bastato creare una variabile di nome <code>punta</code> nei vari giochi e grazie hai metodi getter e setter presenti nella classe utente e' bastato scrivere <code>utente.setCrediti(utente.getCrediti() + puntata);</code> per modificare il saldo dell' utente
                    </div>
                </div>

                <div className={styles.codeWrapper}>
                    <img src="/project-img/img2-p.png" alt="img" />
                </div>
            </div>
        </div>
    );
}