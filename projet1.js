const fs = require('fs');
var text = fs.readFileSync("./list.txt", 'utf-8');


// _______________________________________________________________________Tri fusion : ___________________________________________________________________

console.log("////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////")
console.log("Le tri Fusion :")
var Array = text.split(' ').map((number) => Number.parseInt(number));
function merge(left, right){
  
    var Array = [], l = 0, r = 0;
    while (l < left.length && r < right.length){
        if (left[l] < right[r]){
            Array.push(left[l++]);
        } else {
            Array.push(right[r++]);
        }
    }
    return Array.concat(left.slice(l)).concat(right.slice(r));
}
function fusion(Array){
    if (Array.length < 2) {
        return Array;
    }
    var mid = Math.floor(Array.length / 2),
        right = Array.slice(mid),
        left = Array.slice(0, mid),
        p = merge(fusion(left), fusion(right));
    
    p.unshift(0, Array.length);
    Array.splice.apply(Array, p);
    return Array;
}

console.log(`Liste non triée : ${Array}`);
console.log(fusion(Array));

// ______________________________________________________________________________Tri cocktail : ____________________________________________________

console.log("////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////")
console.log("Le tri cocktail :")
var Array1 = text.split(' ').map((number) => Number.parseInt(number));
const cocktail = (inputArr) => {
    let is_Sorted = true;
    var count = 0;
   while (is_Sorted){
       for (let i = 0; i< inputArr.length - 1; i++){
           if (inputArr[i] > inputArr[i + 1]){
              let temp = inputArr[i];
              inputArr[i] = inputArr[i + 1];
              inputArr[i+1] = temp;
              is_Sorted = true;
           }
           count ++;
       }
       if (!is_Sorted)
           break;
       is_Sorted = false;
       for (let j = inputArr.length - 1; j > 0; j--){
           count ++;
          if (inputArr[j-1] > inputArr[j]){
              let temp = inputArr[j];
              inputArr[j] = inputArr[j - 1];
              inputArr[j - 1] = temp;
              is_Sorted = true;
           }
       }
   }
   console.log(`Il a fallu : ${count} comparaisons`);
   return Array;
}
    console.log(`Liste non triée : ${Array1}`);
    console.log(cocktail(Array1));

// ______________________________________________________________________________Tri de Shell : ____________________________________________________

console.log("////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////")
console.log("Le tri de shell :")
var Array2 = text.split(' ').map((number) => Number.parseInt(number));
function shellSort(arr) {
	var count1 = 0;
	let n = arr.length;

	for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2))	{
		for (let i = gap; i < n; i += 1)  {
			let temp = arr[i];
			count1 ++;
			let j;
			for (j = i; j >= gap && arr[j-gap] > temp; j-=gap)  {
				arr[j] = arr[j-gap];
				count1 ++;
			}

			arr[j] = temp;
		}
	}
	console.log(`Il a fallu : ${count1} comparaisons`);
	return arr;
}
console.log(`Liste non triée : ${Array2}`);
console.log(shellSort(Array2));


//                    Pour lancer l'exercice copier : node projet1 list.txt