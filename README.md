Boolean - Web Development

2° Mese: JAVASCRIPT

Esercizio 11

Descrizione: 

Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

Numero push minimo: 9

NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.

BONUS:

    Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
    Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.

Consigli del giorno:
Pensate prima in italiano.
Dividete in piccoli problemi la consegna.
Individuate gli elementi di cui avete bisogno per realizzare il programma.
Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array"

Ragionamento:

- inizio prendendo gli elementi countdown, instruction. number-list e il form dal DOM
- inserisco un setTimeout di 10 secondi per far scomparire il countdown e le istruzioni e far comparire il form

- creo una variabile in cui salvare i secondi del countdown
- inserisco un setInterval() ogni secondo in modo da incrementare la variabile dei secondi
- modifico il contenuto dell'elemento countdown assegnandogli il valore di seconds

- creo una funzione che mi generi un numero randomico tra 1 e 100

- creo un array in cui salvare i numeri randomici, mi servirà per il controllo finale credo
- creo un for con 5 iterazioni
- al suo interno creo una variabile num a cui assegno la funzione randomNum()
- pusho nell'array la variabile con il numero randomico
- ad ogni iterazione creo un elemento li
- utilizzo append per aggiungere la variabile contenente lo stesso numero randomico pushato nell'array
- utilizzo appendChild per assegnare il nuovo elemento all'elemento number-list

- recupero il bottone dal DOM
- recupero gli input dal DOM
- creo un event listener
- creo un array vuoto
- effettuo un confronto tra i due array (quello con i valori degli input e quelli in cui ho salvato i numeri randomici generati)
- salvo nell'array vuoto tutti i numeri che combaciano
- inserisco un messaggio che indichi quanti e quali numeri combaciano
- svuoto gli input
