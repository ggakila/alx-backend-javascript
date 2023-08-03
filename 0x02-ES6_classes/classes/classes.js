//classes > Class is a blueprint for creating objects 
class Player{
    score = 0;

    pause(){
        console.log("You have paused the game")
    }

    exit(){
        console.log("You have exited the game")
    }
}

const player1 = new Player();
player1.score = 100;
document.body.innerHTML = player1.score;
player1.exit();

const player2 = new Player();
player2.score=50;
document.body.innerHTML = 50;
player2.pause();

//constructors  >> Special methods of a class.
// > accepps arguments and assigns properties 

class Student{
    constructor(name, age, gpa){
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }

    study(){
        console.log(`${this.name} is studying`);
    }

}

const student1 = new Student("Masila", 45, 4.7);
console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);
student1.study();

// static methods >> Belong to the class and not the objects.
//                 > Useful for caches, fixed configurations.
//                 > useful for utility functions.

class Car{
    static numberOfCars = 0;

    constructor(model){
        this.model = model;
        Car.numberOfCars +=1;
    }

    //static method
    static start(){
        console.log("3..2..1..GO!!");
    }
}

const car1 = new Car("Tesla");
const car2 = new Car("Mazda");
const car3 = new Car("BMW");
console.log(Car.numberOfCars);
Car.start();

//inheritance >> A child class can inherit all the methods
//              and properties from another class

// class Animal{
//     alive= true;
//     eat(){
//         console.log(`This ${this.name} is eating`);
//     }
//     sleep(){
//         console.log(`This ${this.name} is sleeping`);
//     }

// }

// class Rabbit extends Animal{
//     name = "rabbit";
//     run(){
//         console.log(`This ${this.name} is running`);
//     }
// }

// class Fish extends Animal{
//     name = "Fish";
//     swim(){
//         console.log(`This ${this.name} swimming`);
//     }
// }

// class Hawk extends Animal{
//     name = "Hawk";
//     fly(){
//         console.log(`This ${this.name} flying`);
//     }
// }

// const Bunny = new Rabbit();
// Bunny.eat();
// const Samaki = new Fish();
// Samaki.sleep();

//Super key word >> Refers to the parent class
//                > Used to invoke constructor of a parent class. 

class Animal{

    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    makeSound(){
        console.log("Animal makes noise")
    }
   
}

class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }
}

class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim(){
        console.log(`${this.name} is swimming`)
    }
}

class Hawk extends Animal{
    constructor(name, age, flySpeed){
        super(name,age);
        self.flySpeed = flySpeed;
    }
}

const fishman = new Fish("shark",34,234);
fishman.swim();
fishman.makeSound();
console.log(fishman.name);

//abstract classes 

class Shape{
    constructor(color){
        if(new.target === Shape){
            throw new Error ('This class cannot be instanciated ')
        }

        this._color = color
    }
}