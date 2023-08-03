let grades = [100, 60, 45, 67, 34 ,56]


function descendingSort(x,y){
    return y - x;
}

let newGrades = grades.sort((x, y) => {
    return y - x;
})

newGrades.forEach((element) => {
    console.log(element)
})


let ascGrades = grades.sort((x,y) => {
    return x -y;
})

ascGrades.forEach((element) => {
    console.log(element)
})