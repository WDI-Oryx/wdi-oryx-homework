
// Thanks Sultan!
function song(num) {
  for (var i = num; i >= 0; i--) {
    if (i === 2) {
      console.log(i + " bottles of coke on the wall, " + i + " bottles of coke.");
      console.log("Take one down, pass it around, " + (i - 1) + " bottle of coke on the wall...");
    } else if (i === 1) {
      console.log(i + " bottle of coke on the wall, " + i + " bottle of coke.");
      console.log("Take one down, pass it around, no more bottles of coke on the wall.");
    } else if (i === 0) {
      console.log("No more bottles of coke on the wall, no more bottles of coke.");
      console.log("Go to the store and buy some more, " + num + " bottles of coke on the wall.");
    } else {
      console.log(i + " bottles of coke on the wall, " + i + " bottles of coke.");
      console.log("Take one down, pass it around, " + (i - 1) + " bottles of coke on the wall...");
    }
  }
}

song(3);

// Thanks Alanoud!
function bottleCounter(start, end) {
  for (var i = start; i >= end; i--) {
    j = i - 1;
    if (i === 2) {
      console.log(i + " bottles of coke on the wall, " + i + " bottles of coke. \nTake one down, pass it around, " + j + " bottle of coke on the wall...");
    }
    else if (i === 1) {
      console.log(i + " bottle of coke on the wall, " + i + " bottle of coke. \nTake it down and pass it around, no more bottles of coke on the wall.");
    } else if (i === 0) {
      console.log("No more bottles of coke on the wall, no more bottles of coke. \nGo to the store and buy some more, 99 bottles of coke on the wall.");
    } else {
      console.log(i + " bottles of coke on the wall, " + i + " bottles of coke. \nTake one down, pass it around, " + j + " bottles of coke on the wall...");
    }
  }
}
bottleCounter(5, 1);