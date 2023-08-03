const set1 =  new Set();

set1.add(45);
set1.add(56);

// for(items of set1){
//     console.log(items)
// }

set1.delete(56)

// for(items of set1){
//     console.log(items)
// }

set1.add(34);
set1.add([45,56,78]);

for(items of set1){
    console.log(items)
}

console.log(set1.has(36));
console.log(set1.keys());
console.log(set1.values())