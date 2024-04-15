import styles from './CodeEx.module.scss';

export default function CodeEx() {
    return(
        <div className={styles.container}>
            <div className={styles.title}>
                <div>01. Utenti</div>
            </div>

            <div className={styles.contentContainer}>
                <div className={styles.contentText}>
                    <div>
                        la classe Utenti è la classe da cui parte tutto il programma e gestisce la registrazione
                        e l'accesso di un utente, al suo interno presenta 3 metodi e il costruttore, i tre
                        metodi sono:
                    </div>
                    <div>
                        1) <code>gestione()</code>: dove si va a chiamare il menu che chiede cosa si vuole fare tra:
                        registrati, accedi e esci, in base alla scelta viene richiamato un altro metodo.
                        Es: premo 1 e mi fa registrare richiamando il metodo <code>registrati()</code>              
                    </div>
                        <div className={styles.codeWrapper}>
                            <img src="/project-img/img1-u.png" alt="img" />
                        </div>
                    <div>
                        2) <code>registrati()</code>: il metodo registrati sostanzialmente serve a far registrare un
                        nuovo utente, facendo inserire email e password, successivamente si Istanzia
                        la classe utente passando l'email, la password e i crediti (che di base per i
                        nuovi utenti sono un milione in modo da poter subito iniziare a giocare).
                        La parte finale del metodo gestisce il salvataggio dell'utente nel file, in modo
                        che la prossima volta che vuole giocare non debba ricreare un account ma ha <code>FileWriter()</code>
                        già il suo salvato, questo salvataggio avviene con un'inizializzazione del
                        passando il nome del file e “true” (quest'ultimo serve ad aprire il
                        file in modalità append in modo da non sovrascrivere ogni volta il file), infine
                        facciamo scrivere l'utente nel file tramite un semplice comando <code>write.write(utente + “\n”)</code>

                    </div>
                        <div className={styles.codeWrapper}>
                            <img src="/project-img/img2-u.png" alt="img" />
                        </div>
                    <div>
                        3)<code>accedi()</code>: il metodo accedi serve a far accedere gli utenti che hanno già creato
                        un proprio account. Inizialmente chiede di inserire l'email e la password,
                        successivamente apre il file con tutti gli utenti in lettura servendosi del
                        <code>BufferedReader()</code> e del ()<code>FileReader()</code> (li usa tutti e due in modo da essere più
                        veloce nel leggere un grossa quantità di caratteri in un file di testo).
                        Inizializzand read per leggere le righe nel file, autenticazione per vedere se le
                        credenziali sono corrette (che inizialmente è inizializzato a false) e utente.

                        La parte più complicata in accedi è la parte dove confronta le credenziali
                        inserite con quelle nel file, è presente un while che legge le righe finchè non
                        finisce il file, all' interno del while si crea un array composto da email alla cella
                        0 e password alla cella 1 (tutto questo è permesso grazie a .split(“ “),
                        successivamente l' array si dive nelle varie parti dell' utente (che sono email,
                        password e crediti). Tramite un if si controlla se le credenziali inserite
                        dall'utente siano quelle prese nel file, se sono corrette ad autenticazione
                        viene assegnato true. Infine con un if si controlla se il valore di autenticazione
                        è true se è effettivamente così ci fa proseguire alla scelta del gioco, altrimenti
                        ci fa reinserire le credenziali.
                    </div>

                    <div className={styles.codeWrapper}>
                        <img src="/project-img/img3-u.png" alt="img" />
                    </div>
                </div>
            </div>

            <div className={styles.title}>
                <div>02. Utente</div>
            </div>

            
            <div className={styles.contentContainer}>
                <div className={styles.contentText}>
                    <div>
                        la classe Utente rappresenta un utente infatti al suo interno si gestiscono email,
                        password e crediti, possiamo trovare 6 metodi:
                    </div>
                    <div>
                        1) Il primo è <code>getEmail()</code> che è semplicemente un getter per l'email             
                    </div>
                    <div>
                        2) <code>getPassword()</code> che è la stessa cosa dell'email
                    </div>

                    <div>
                        3)<code>getCrediti()</code> stessa cosa
                    </div>

                    <div>
                        4)<code>setCrediti()</code> invece serve per settare i crediti quando un utente gioca nel caso
                        vincesse o perdesse         
                    </div>
                    
                    <div>
                        5)<code>toString()</code> è un metodo che usiamo per andare a scrivere nel file l'utente
                        registrato
                    </div>

                    <div className={styles.codeWrapper}>
                        <img src="/project-img/img4-u.png" alt="img" />
                    </div>

                </div>
            </div>
        </div>
    );
}