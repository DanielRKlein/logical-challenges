/*The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.*/

function count(string) {
    const obj = {}
    const strArray = string.split("")
    if(strArray !== null){
        for (i = 0; i < strArray.length; i++) {
            if (obj[strArray[i]]) {
                obj[strArray[i]] += 1;
            } else {
                obj[strArray[i]] = 1;
            }
        }
    }
    return obj;
}

console.log(count("aba"))