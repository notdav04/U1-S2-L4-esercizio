/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 1");
function area(l1, l2) {
  return l1 * l2;
}
console.log(area(2, 3));
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 2");
function crazySum(n1, n2) {
  if (n1 === n2) {
    return (n1 + n2) * 3;
  } else {
    return n1 + n2;
  }
}
console.log(
  "somma con valori differenti: " + crazySum(2, 3),
  "/ somma con numeri uguali: " + crazySum(2, 2)
);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Eserczio 3");
function crazyDiff(n1) {
  if (n1 > 19) {
    return Math.abs(n1 - 19) * 3;
  } else {
    return Math.abs(n1 - 19);
  }
}
console.log(
  "differenza assoluta con n° minore di 19:",
  crazyDiff(15),
  "/ differenza assoluta con n° maggiore di 19:",
  crazyDiff(25)
);
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 4");
function boundary(n) {
  if (typeof n === "number" && parseInt(n) === n) {
    // n = Math.floor(n);  /avrei potuto approssimare
    if ((n > 20 && n <= 100) || n === 400) {
      return true;
    } else {
      return false;
    }
  } else {
    return "Sei pregato di inserire un numero intero";
  }
}

console.log(boundary(25));
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 5");
function epify(stringa) {
  if (typeof stringa === "string") {
    if (stringa.slice(0, 7) === "EPICODE") {
      return stringa;
    } else {
      stringa = "EPICODE " + stringa;
      return stringa;
    }
  } else {
    return "sei pregato di inserire una stringa";
  }
}

console.log(epify("EPICODE has different courses"));
console.log(epify("has different courses"));
console.log(epify(2));
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 6");
function check3and7(n) {
  if (typeof n === "number" && Math.abs(n) === n) {
    if (n % 3 === 0) {
      if (n % 7 === 0) {
        return n + " è divisibile sia per 3 che per 7!";
      } else {
        return n + " è divisibile per 3!";
      }
    } else if (n % 7 === 0) {
      if (n % 3 === 0) {
        return n + " è divisibile sia per 3 che per 7!";
      } else {
        return n + " è divisibile per 7!";
      }
    } else {
      return n + " non è  divisibile per 3 o per 7!";
    }
  } else {
    return "sei pregato di inserire un numero positivo";
  }
}

console.log(check3and7(9));
console.log(check3and7(14));
console.log(check3and7(21));
console.log(check3and7(1));
console.log(check3and7(-10));
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 7");
function reverseString(stringa) {
  if (typeof stringa === "string") {
    let stringa_array = stringa.split("");
    stringa_array = stringa_array.reverse();
    stringa = stringa_array.join("");
    // stringa = stringa.split("").reverse().join("");
    return stringa;
  } else {
    return "sei pregato di inserire una stringa";
  }
}

console.log(reverseString("ciao mi chiamo davide"));
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 8");
function upperFirst(stringa) {
  if (typeof stringa === "string") {
    let words = stringa.split(" ");
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      word = word[0].toUpperCase() + word.slice(1);
      words[i] = word;
    }
    stringa = words.join(" ");
    return stringa;
  } else {
    return "sei pregato di inserire una stringa";
  }
}

console.log(upperFirst("ciao mi chiamo davide"));
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 9");
function cutString(stringa) {
  if (typeof stringa === "string") {
    stringa = stringa.slice(1);
    stringa = stringa.slice(stringa.lenght, -1);
    return stringa;
  } else {
    return "sei pregato di inserire una stringa";
  }
}
console.log(cutString("ciao mi chiamo davide"));
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 10");
function giveMeRandom(n) {
  let num_array = [];
  for (let i = 0; i < n; i++) {
    num_array.push(Math.floor(Math.random() * 11));
  }
  return num_array;
}

console.log(giveMeRandom(10));
