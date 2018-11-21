# Robot Factory

You run a robot factory. As robots are created, they roll off the conveyor belt as empty, mindless husks of machinery -- until you **second** boot them up.

The first time you boot them up, a random name is randomly generated, and assigned to itself by the robot.

Names typically take the format of things like "BX777" or "SD234".

For instance:

```js
let robot1 = new Robot();

console.log(robot1.name);
=> "BX777"

let robot2 = new Robot();

console.log(robot2.name);
=> "SD234"

console.log(robot1.name);
=> "SD234"
```

Every once in a while we need to reset a robot to its factory settings, which means that their name gets wiped. 
The next time you ask, it gives a new name.

if I say:

```js
let robot3 = new Robot();

console.log(robot3.name);
=> "RF629"

robot3.reset();

console.log(robot3.name);
=> "ZC532"
```

### Counters

It's important that we not overwork our robots. 
While resetting to factory defaults is great, the wear and tear on the robot mechanisms doesn't go away. 

For every action our robot takes, we should keep track of it.

```js
let robot3 = new Robot();
console.log(robot3.name);
console.log(robot3.name);

robot3.reset();
console.log(robot3.name);
console.log(robot3.name);

console.log(robot3.instructionCount());
=> 5
```

### How to start
- Look at the first robot factory we built with Ruby [here](https://github.com/WDI-Oryx/wdi-oryx-homework/tree/master/_Warmup_Exercises/week_04/day_04)
- Learn JS classes [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)