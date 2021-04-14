const fs = require('fs');
var text = fs.readFileSync("./list.txt", 'utf-8');
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

// Pour lancer l'exercice copier: node tri_fusion.js list.txt
