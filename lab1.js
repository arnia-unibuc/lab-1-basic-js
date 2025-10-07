/* 
1.  Creaza o functie care sa primeasca un argument `name` de tip string. 
    Functia trebuie sa returneze un string de forma "Hello, <nume>!"
*/

const hello = (name) => {
    // ...
}

/*
2.  Creaza o functie care sa returneze textul primit in lowercase
*/

const lowercase = (text) => {
    // ...
}

/*
3.  Creaza o functie care sa primeasca urmatoarele 3 argumente: x, y si operation.
    Functia trebuie sa execute operatia matematica dintre x si y in functie de 
    valoarea argumentului operation (+, -, *, /) si sa returneze rezultatul
*/
const calc = (x, y, operation) => {
    // ...
}

/*
4.  Creaza o functie care sa itereze printr-un array de numere intregi, sa valideze ca valorile sunt intr-adevar 
    numerice si sa retureze suma acestora. In cazul in care o valoare nu este numerica, 
    aceasta valoare sa nu fie luata in calcul.
*/
const sum = (numbers) => {
    // ...
}

/*
5.  Creaza o functie care sa returneze un obiect ce va contine urmatoarele proprietati: firstName, lastName, age si o 
    metoda `getFullName` care sa returneze numele complet (ex: "Florin Stoian").
*/
const createStudent = (firstName, lastName, age) => {
    // ...
}

module.exports = {
    hello,
    lowercase,
    calc,
    sum,
    createStudent
};