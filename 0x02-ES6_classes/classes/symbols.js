const symb = Symbol("Symbol description")

let obj2 = {
    name: 'Steve',
    [symb] : new Date(),
}



const symbol2 = Symbol.for('Object Data');
let obj = {
    name: 'steve',
    [symbol2] : new Date(),
};

