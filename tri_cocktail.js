const fs = require('fs');
var text = fs.readFileSync("./list.txt", 'utf-8');
var Array = text.split(' ').map((number) => Number.parseInt(number));


 const cocktail = (inputArr) => {
     let is_Sorted = true;
    while (is_Sorted){
        for (let i = 0; i< inputArr.length - 1; i++){
            if (inputArr[i] > inputArr[i + 1]){
               let temp = inputArr[i];
               inputArr[i] = inputArr[i + 1];
               inputArr[i+1] = temp;
               is_Sorted = true;
            }
        }
        if (!is_Sorted)
            break;
        is_Sorted = false;
        for (let j = inputArr.length - 1; j > 0; j--){
           if (inputArr[j-1] > inputArr[j]){
               let temp = inputArr[j];
               inputArr[j] = inputArr[j - 1];
               inputArr[j - 1] = temp;
               is_Sorted = true;
            }
        }
    }
    return Array;
}
     console.log(`Liste non triée : ${Array}`);
     console.log(cocktail(Array));

     // Pour lancer l'exercice copier: node tri_cocktail.js list.txt