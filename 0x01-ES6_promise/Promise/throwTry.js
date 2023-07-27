// try{
//     let name = prompt("Enter your name")
// } catch(error){
//     console.log(error.name);
//     console.log(error.message);
// }


try{
    let age = prompt("Enter your age ")
    if(age == "") throw "You dint enter anything!";
    if(isNaN(age)) throw age + " is not a number!!";
} 
catch(error){
    document.getElementById('name').innerHTML = error;
}
finally{
    let message = "Thank you for visiting" ;
    document.getElementById('name').innerHTML = message;
}
