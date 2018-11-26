import Person from "./Person";
import Shape from "./Shape";
import Triangle from "./Triangle";


class Animal {}

const jacques = new Person("Jacques","google@");

jacques.sayHi();
jacques.displayEmail();



class Rectangle extends Shape{
    constructor(width,height){
        super("Rectangle");
        this.width = width;
        this.height = height;
    }
}



const r = new Rectangle(40,20);
console.log(r);

const t = new Triangle(4, 5, 6)
console.log(t);

class Vehicle{
    constructor(type){
        this.type = type;
        console.log(`A new ${this.type} was created`);

    }
}

class Car extends Vehicle{
    constructor(horsedpower,topspeed){
        super("Car");
        this.horsedpower = horsedpower;
        this.topspeed = topspeed;

    }
}

const c = new Car(200,300);
console.log(c); 

