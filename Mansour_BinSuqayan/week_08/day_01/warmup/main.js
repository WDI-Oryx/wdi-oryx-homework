alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// for ( var i = 0 ; i < alphabet.length ; i ++ ){
//     var alphabetarr = alphabet[i];
// }


// console.log(alphabetarr);

function encode(plainText){
    let cipher = " ";
    for(let char of plainText){
        let index = alphabet.indexOf(char);
        let newLetter = reversedAlphabet[index];
        cipher += newLetter;

    }




    return cipher;
} 