class Robot {
  constructor() {
    this._name = this.getRandomName();
    this._counter = 0;
  }

  get name() {
    this._counter++;
    return this._name
  }

  set name(newName) {
    this._counter++;
    this._name = newName;
  }

  get counter() {
    return this._counter;
  }

  getRandomName() {
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
    let numbers = "0123456789";

    let randomName = '';

    for (let i = 0; i < 2; i++) {
      let randNum = Math.floor(Math.random() * numbers.length);
      randomName += numbers.substring(randNum, randNum + 1);
    }

    for (let i = 0; i < 3; i++) {
      let randNum = Math.floor(Math.random() * letters.length);
      randomName += letters.substring(randNum, randNum + 1);
    }

    return randomName;
  }
}

let robot1 = new Robot();
console.log("robot1: ", robot1.name);

let robot2 = new Robot();
console.log("robot2: ", robot2.name);

robot1.name = "ROB1";
console.log("robot1: ", robot1.name);

console.log("Robot1 counter: ", robot1.counter);
console.log("Robot2 counter: ", robot2.counter);