import styles from './CodeEx.module.scss';

export default function CodeEx() {
    return(
        <div className={styles.container}>
            <div className={styles.title}>
                <div>01. bj</div>
            </div>

            <div className={styles.contentContainer}>
                <div className={styles.contentText}>
                    <div>
                        1) <code>play()</code>: la classe play serve innanzi tutto ad inizializzare i mazzi e le carte, successivamente abbiamo le 2 seguenti condizioni <code>while (playerHand. calculateValue() minore 21)</code> <code>while (dealerHand.calculateValue() minore 17)</code> che servono rispettivamente a chiedere se si vuole pescare in altra carta se si ha un valore minore di 21 e a far pescare una carta al banco se il valore è minore di 17 <code>registrati()</code>              
                    </div>
                        <div className={styles.codeWrapper}>
                            <img src="/project-img/img1-b.png" alt="img" />
                        </div>
                    <div>
                        2) <code>classe card</code>: La classe Card ha due membri privati: suit e rank, che rappresentano rispettivamente il seme e il valore della carta.Il costruttore Card(String suit, String rank) prende due argomenti, suit e rank, e li assegna ai membri suit e rank dell'oggetto Card corrente.I metodi getSuit() e getRank() sono metodi di accesso che restituiscono rispettivamente il seme e il valore della carta.Il metodo toString() è sovrascritto per restituire una rappresentazione testuale della carta. Restituisce il valore della carta seguito da "di" e il seme della carta. Ad esempio, se il valore della carta è "Asso" e il seme è "Cuori", il metodo toString() restituirebbe "Asso di Cuori"

                    </div>
                        <div className={styles.codeWrapper}>
                            <img src="/project-img/img2-b.png" alt="img" />
                        </div>
                    <div>
                        3)<code>classe deck</code>: La classe Deck ha un membro privato cards che è un ArrayList di oggetti Card. Questo ArrayList tiene traccia delle carte nel mazzo.Il costruttore <code>Deck()</code> inizializza l'ArrayList cards e quindi crea un mazzo standard di carte. Vengono definiti due array di stringhe, suits e ranks, che rappresentano rispettivamente i semi delle carte e i valori delle carte. Viene quindi utilizzato un doppio ciclo for per creare tutte le possibili combinazioni di carte (ad esempio, tutti i semi con tutti i valori) e aggiungere ogni carta all'ArrayList cards. Alla fine, le carte vengono mescolate utilizzando il metodo <code>Collections.shuffle(cards)</code>.Il metodo <code>drawCard()</code> estrae e restituisce la prima carta dal mazzo rimuovendola dall'ArrayList cards utilizzando il metodo cards.remove(0)
                    </div>

                    <div className={styles.codeWrapper}>
                        <img src="/project-img/img3-b.png" alt="img" />
                    </div>
                </div>
            </div>
        </div>
    );
}