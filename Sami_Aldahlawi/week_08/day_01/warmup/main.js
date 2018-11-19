alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



function cipherText(text,alph){
    var meg = ""
    for(let i = 0; i < text.length;i += 1){
        var position = alph.indexOf(text[i]);
        var newPosition = 25 - position;
        meg += alph[newPosition];
    }
    return meg;
}
console.log(cipherText("rolevblf",alphabet));
