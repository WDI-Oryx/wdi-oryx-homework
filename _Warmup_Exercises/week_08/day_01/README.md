# Atbash Cipher

The Atbash cipher is a simple substitution cipher that relies on transposing all the letters in the alphabet such that the resulting alphabet is backwards. The first letter is replaced with the last letter, the second with the
second-last, and so on.

An Atbash cipher for the Latin alphabet would be as follows:

```plain
Plain:  abcdefghijklmnopqrstuvwxyz
Cipher: zyxwvutsrqponmlkjihgfedcba
```

It is a very weak cipher because it only has one possible key, and it is a
simple monoalphabetic substitution cipher. However, this may not have been an issue in the cipher's time.

## Examples
- Encoding "a" gives "z"
- Encoding "z" gives "a"
- Encoding "test" gives "gvhg"
- Decoding "gvhg" gives "test"

## Starter code
```js
alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
```