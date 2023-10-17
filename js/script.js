// test
// alert("Ciao");

// Raccolta dati
// nome
const name = prompt("Scrivi il tuo nome");
console.log(name, typeof name);

// cognome
const lastName = prompt("Scrivi il tuo cognome");
console.log(lastName, typeof lastName);

// colore preferito
const color = prompt("Scrivi il tuo colore preferito");
console.log(color, typeof color);

// Logica programma
// password
const password = name + lastName + color ;
console.log(password, typeof password);

const message = `La tua password è: ${password}21`;
console.log(message);

// output
document.getElementById("result").innerHTML = message;