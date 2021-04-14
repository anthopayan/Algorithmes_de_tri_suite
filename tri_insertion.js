const fs = require('fs');
var text = fs.readFileSync("./list.txt", 'utf-8');
var Array = text.split(' ').map((number) => Number.parseInt(number));

const insertion = (inputArr) => {
    var count2 = 0;
         let length = inputArr.length;
         for (let i = 1; i < length; i++) {
             count2 ++;
             let key = inputArr[i];
             let j = i - 1;
             while (j >= 0 && inputArr[j] > key) {
                 count2 ++;
                 inputArr[j + 1] = inputArr[j];
                 j = j - 1;
             }
             inputArr[j + 1] = key;
         }
         console.log("Tri par insertion");
         console.log(`Nombre d'opérations: ${count2}`);
         console.log("Voici la liste triée:");
        return inputArr;
     }
     console.log(`Liste non triée : ${Array}`);
     console.log(insertion(Array));

     // Pour lancer l'exercice copier: node tri_insertion.js list.txt