# Transformers

![](https://media.giphy.com/media/pfeT03JnVSsbC/giphy.gif)

### Set Up

1. Create a file to work in.
2. Use `node` to test your work.

### Part 1 - Transformers

Given the array of transformers below, acomplish the following tasks:

1. Write a function called `transformersNames` that uses `map` to return a new array of transformers' names.
2. Write a function called `onlyAutobots` that uses `filter` to return a new array of only Autobots.
3. Write a function called `onlyVehicles` that uses `filter` to return a new array of transformers with only vehicle forms.

```js
let transformers = [
  {
    name: 'Optimus Prime',
    form: 'Freightliner Truck',
    form_type: 'vehicle',
    team: 'Autobot'
  },
  {
    name: 'Megatron',
    form: 'Gun',
    form_type: 'object',
    team: 'Decepticon'
  },
  {
    name: 'Bumblebee',
    form: 'VW Beetle',
    form_type: 'vehicle',
    team: 'Autobot'
  },
  {
    name: 'Soundwave',
    form: 'Walkman',
    form_type: 'object',
    team: 'Decepticon'
  },
  {
    name: 'Starscream',
    form: 'Fighter Jet',
    form_type: 'vehicle',
    team: 'Decepticon',
  },
  {
    name: 'Rodimus Prime',
    form: 'Ford GT',
    form_type: 'vehicle',
    team: 'Autobot',
  }
];
```