//array.forEach() >> Executes a provided callback function once for each array element 

let students = ["spongbob","patrick","squidward"]

function capitalize(element, index, array){
    array[index] = element[0].toUpperCase() + element.substring(1);
}

// students.forEach((element) => {
//     console.log(element)
// })

students.forEach((element, index, array) => {
    array[index] = element[0].toUpperCase() + element.substring(1);
})

console.log(students)