//array.reduce => Reduces and array to a single value 
// A good use is to get the total of an array in Carts

let prices =[5,10,15,20,25]
let total = prices.reduce(checkOut);
console.log(total)

function checkOut(total, element){
    return total + element
}

let total1 = prices.reduce((total, element) => {
    return total + element
})

console.log(total1)