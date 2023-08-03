// var cars = ['mustang','Corvette','Jaguar']
// cars.push('Tesla') // adds an element 
// cars.pop(); // removes and element


// var numberOfCrs = cars.length;
// console.log(numberOfCrs);

// cars = cars.sort();
// cars = cars.reverse()
// console.log(cars)

// looping though arrays 

// let prices = [5, 10, 15, 20];

// for( price of prices ){
//     console.log(price);
// }

//

// let fruits = ['banana','apple','orange','mango'];
// // fruits = fruits.sort();
// // fruits = fruits.reverse()

// for(fruit of fruits){
//     console.log(fruit)
// }

// //2D Arrays 


// let vegetables =['carrots','onions','potatoes'];
// let meats = ['eggs','chicken','fish']


// let groceryList = [fruits, vegetables, meats];


// console.log('')

// groceryList[0][0] = "pineapples";
// groceryList[2][0] = "steak"

// for (list of groceryList){
//     // console.log(list)
//     for(food of list){
//         console.log(food)
//     }
// }

// // Spread opeartor 
// console.log(...groceryList)
// console.log(...meats)
// let number = [1,2,3,4,5,6,7,8,9]
// console.log(...number);


// let maximum = Math.max(...number);
// console.log(maximum)

//Spread operator >> Allows arrys or strings to be expanded where
//                   zero or more arguments are expected(unpacks elements)
// let class1 = ["spongbob", "Patrick", "Sandy"];
// let class2 = ["Squidward", "Mr. Krabs", "Plankton"]


// class1.push(...class2)
// console.log(class1)

//rest operator >> Represents an indefinate no of arguments args* in python
//The rest operator packs them into an array

let a =1 
let b = 2; 
let c = 4; 
let d = 23;

function sum(...numbers){
    let total = 0
    for (number of numbers){
        total += number;
    }

    return total;
}

console.log(sum(a,b,c,d));