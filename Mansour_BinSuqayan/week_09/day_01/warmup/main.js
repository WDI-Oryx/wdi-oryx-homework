var hamlets = [
  “Laurence Olivier, 1948”,
  “Grigori Kozintsev, 1964",
  “Tony Richardson, 1969”,
  “Franco Zeffirelli, 1990",
  “Kenneth Branagh, 1996”,
  “Michael Almereyda, 2000"
 ];
 
 console.log(“Scene I”);
 hamlets.forEach(hamlet => {
  let splitHamlet = hamlet.split(“, “);
  console.log(
    `O! the venerable ${splitHamlet[0]} starred as Hamlet in ${splitHamlet[1]}`
  );
 });
 
 console.log(“Scene II”);
 let hamletsArray = hamlets.map(hamlet => {
  let splitHamlet = hamlet.split(“, “);
  splitHamlet[1] = parseInt(splitHamlet[1]);
  return splitHamlet;
 });
 console.log(hamletsArray);
 
 console.log(“Scene III”);
 let hamletsObjects = hamletsArray.map(hamlet => {
  return {
    name: hamlet[0],
    year: hamlet[1]
  };
 });
 console.log(hamletsObjects);
 
 console.log(“Scene IV”);
 let swingingHamlets = hamletsObjects.filter(hamlet => {
  return hamlet.year >= 1960 && hamlet.year < 1970;
 });
 console.log(swingingHamlets);
 
 console.log(“Scene V”);
 let futureHamlets = hamletsObjects.filter(hamlet => {
  return hamlet.year >= 2000;
 });
 console.log(futureHamlets);