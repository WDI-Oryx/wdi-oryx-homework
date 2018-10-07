console.log("js connected!");

var j = 0;
var carCompanies = ['Honda', 'Toyota', 'Ford', 'Hyundai', 'Mazda', 'Hummer'];
while (j < carCompanies.length) {
    if (carCompanies[j].startsWith('H')) {
        console.log(carCompanies[j]);
    }
    j++;
}
