const fs = require('fs');
var text = fs.readFileSync("./list.txt", 'utf-8');
var Array = text.split(' ').map((number) => Number.parseInt(number));

const bulles = (Array) => {
    var count = 0;
    let len = Array.length;
    for (let i = 0; i < len; i++) {
        count += 1;
        for (let j = 0; j < len; j++) {
            count += 1;
            if (Array[j] > Array[j + 1]) {
                let tmp = Array[j];
                Array[j] = Array[j + 1];
                Array[j + 1] = tmp;
            }
        }
    }
    console.log("Tri à bulles");
    console.log(`Nombre d'opérations: ${count}`);
    console.log("Voici la liste triée:");
   return Array;
}

console.log(`Liste non triée : ${Array}`);
console.log(bulles(Array));

// Pour lancer l'exercice copier: node tri_bulles.js list.txt