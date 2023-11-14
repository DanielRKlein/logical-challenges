/* A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation. */

function isPangram(string){
    let sentenceLetters = string.toLowerCase().split("");
    let counter = 0;
    let arr = [];
    for (let i = 0; i < sentenceLetters.length; i++) {
        if (sentenceLetters[i] >= 'a' && sentenceLetters[i] <= 'z' && arr.includes(sentenceLetters[i]) === false) {
            arr += sentenceLetters[i]
        }
    }
    if (arr.length >= 26) { //26 é a quantidade de letras no alfabeto
        return true
    }
    else {
        return false
    }
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."))
console.log(isPangram("This is not a pangram."))