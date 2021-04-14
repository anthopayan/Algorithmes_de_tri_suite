const fs = require('fs');
var text = fs.readFileSync("./list.txt", 'utf-8');
var Array = text.split(' ').map((number) => Number.parseInt(number));


function shellSort(arr) {
	var count = 0;
	let n = arr.length;

	for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2))	{
		for (let i = gap; i < n; i += 1)  {
			let temp = arr[i];
			count ++;
			let j;
			for (j = i; j >= gap && arr[j-gap] > temp; j-=gap)  {
				arr[j] = arr[j-gap];
				count ++;
			}

			arr[j] = temp;
		}
	}
	console.log(`Il a fallu : ${count} comparaisons`);
	return arr;
}
console.log(`Liste non triée : ${Array}`);
console.log(shellSort(Array));

// Pour lancer l'exercice copier: node tri_shell.js list.txt