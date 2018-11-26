# Good Morrow!

![:image](https://i0.wp.com/www.filmscouts.com/zgifclip/cannes97/hamlet.gif)

> Is it Nobler in the mind to suffer rewriting each array as a object or to take Arms and convert them programmatically?

# Act I

### Scene I

Use `.forEach` to print out "O! the venerable [Actor] starred as Hamlet in [Year]"

```js
var hamlets = [
  "Laurence Olivier, 1948",
  "Grigori Kozintsev, 1964",
  "Tony Richardson, 1969",
  "Franco Zeffirelli, 1990",
  "Kenneth Branagh, 1996",
  "Michael Almereyda, 2000"
];
```

### Scene II

Programmatically convert the `hamlets` array into an array of arrays where the first element, name, is a string, and the second element, year, is an integer.

Example expected transformation:
```js
var hamlets = [
  "Laurence Olivier, 1948",
  "Grigori Kozintsev, 1964",
  "Michael Almereyda, 2000"
]
=>
var hamlets = [
  ["Laurence Olivier", 1948],
  ["Grigori Kozintsev", 1964],
  ["Michael Almereyda", 2000]
]
```

### Scene III

Programmatically convert the `hamlets` array of arrays into an array of objects where the keys are `name` and `year`

Example expected transformation:
```js
var hamlets = [
  ["Laurence Olivier", 1948],
  ["Grigori Kozintsev", 1964],
  ["Michael Almereyda", 2000]
]
=>
var hamlets = [
  {
    name: "Laurence Olivier",
    year: 1948
  },
  {
    name: "Grigori Kozintsev",
    year: 1964
  },
  {
    name: "Michael Almereyda",
    year: 2000
  }
]
```

### Scene IV

Programmatically select all the Hamlets from the 1960's and assign them to an array called `swingin_hamlets`

Example expected transformation:
```js
var hamlets = [
  {
    name: "Laurence Olivier",
    year: 1948
  },
  {
    name: "Grigori Kozintsev",
    year: 1964
  },
  {
    name: "Michael Almereyda",
    year: 2000
  }
]
=>
var swingin_hamlets = [
  {
    name: "Grigori Kozintsev",
    year: 1964
  }
]
```

### Scene V

Programmatically select all the Hamlets from the 2000's and assign them to an array called `future_hamlets`

Example expected transformation:
```js
var hamlets = [
  {
    name: "Laurence Olivier",
    year: 1948
  },
  {
    name: "Grigori Kozintsev",
    year: 1964
  },
  {
    name: "Michael Almereyda",
    year: 2000
  }
]
=>
var future_hamlets = [
  {
    name: "Michael Almereyda",
    year: 2000
  }
]
```