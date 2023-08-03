// call back function >> function passed as an argument to another function 
// ensures function wont run unless task is completed 

sum(2,3, displayConsole)
sum(4,5, displayDOM)

function sum(x, y , callBack){
    let result = x + y;
    callBack(result);
}

function displayConsole(output){
    console.log(output)
}

function displayDOM(output){
    document.getElementById("myLabel").innerHTML = output;
}


//