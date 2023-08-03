//array.filter() >> Creates a new array with all the elements
//                  that oass the test provided by a function

let ages = [18, 16, 21, 17, 19, 90]

function checkAge(element){
    return element >= 18
}

let over18 = ages.filter(checkAge)
console.log(over18)

// or 


let eighteenAndOver = ages.filter((element) => {
    return element >= 18;
})

console.log(eighteenAndOver);