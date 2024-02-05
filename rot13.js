/*ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".*/


function rot13(message){
    let cypheredText = [];
    message.split('').forEach((element, index) => {
        if ((element >= 'a' && element <= 'z') || (element >= 'A' && element <= 'Z')) {

            //transforma o caracter em minúsculo para padronizar o range na tabela ASCII
            element = element.toLowerCase();

            if ((element.charCodeAt(0) + 13) > 122) {
                cypheredText.push(String.fromCharCode(element.charCodeAt(0) - 13));
            }
            else {
                cypheredText.push(String.fromCharCode(element.charCodeAt(0) + 13));
            }

            //verifica se o caracter original era maiúsculo e caso fosse, transforma ele de volta
            if (message[index].toUpperCase() == message[index]) {
                cypheredText[index] = cypheredText[index].toUpperCase();
            }
        }
        else {
            cypheredText.push(element);
        }
    });
    return cypheredText.join('');
  }

  console.log(rot13("Test"));