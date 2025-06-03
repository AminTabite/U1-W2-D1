/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* 1) javascript é un linguaggio di programmazione che si basa su algoritmi, ovvero una serie di passaggi che con un ordine specifico, riescono a risolvere un problema specifico.
i principali datatype sono : le variabili, i valori booleani e poi abbiamo alcuni comandi per svolgere operazioni sui nostri dati .
Le variabili : Sono un insieme di risultati parziali che hanno valore specifico , in termini tecnici sono allocazioni di memoria , per definire una variabile usiamo la sigla "let"


I valori booleani: Sono anche loro delle variabili, che peró indicano anche la veridicitá di un' espressione. per indicare i valori booleani usiamo la sigla Let bool(etc)

alcuni comandi per eseguire le espressioni 

la funzione AND (serve a concatenare piú espressioni tra loro con il simbolo && )

 la funzione OR  (serve a risolvere l'espressione, per renderla valida basta che ci sia un dato valido (true) si scrive con  ||  )

 la funzione Not (inverte il valore di un' espressione. si scrive con !)

 la funzione ternaria  ( serve per assegnare un valore variabile sulla base della condizione, si scrive con  : )

 la funzione console.log = (serve per verificare gli eventi)


/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/


/* SCRIVI QUI LA TUA RISPOSTA */

let myName = "Amin"

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n1 = 12

let n2 = 20

let n3 = n1+n2

console.log(n3)



/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


let x = 12 

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const MyName = "Amin"

let MySurname = "tabite"

console.log("il mio nome é amin tabite?"+ "MyName" + "  " +"MySurname" === "myName" + "MySurname")

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let a = 4

let b = 12

console.log("4-12", a-b)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "john"

let name2 = "John"

console.log("sono john e John diversi ?" + "  " + "name1"==="name2")