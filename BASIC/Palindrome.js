//Palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or 121
function Palindrome(str) {
    str = str.toLowerCase();
    let word = '';
    let reversed = '';
    for (let i = 0; i < str.length; i++) {
        if (
            (str[i] >= "a" && str[i] <= "z") || (str[i] >= "0" && str[i] <= "9")) {
            word += str[i];
        }
    }
    for (let j = word.length - 1; j >= 0; j--) {
        reversed += word[j];
    }
    if (word === reversed) {
        return true;
    }
    else {
        return false;
    }
}

console.log(Palindrome("madam")); // Output: true
