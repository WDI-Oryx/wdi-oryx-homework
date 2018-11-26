 export default class Person {
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    sayHi(){
        console.log(`Hi there! I am ${this.name}`);
    }
    displayEmail(){
        console.log(`my email is ${this.email}`);
    }
}