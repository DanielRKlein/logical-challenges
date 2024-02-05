/* In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc. */

function alphabetPosition(text) {
    //transforma a string em array e filtra apenas os caracteres de a-z
    text = text.toLowerCase().split('').filter(element => {
        if (element >= 'a' && element <= 'z') {
            return element;
        }
    });

    text = text.map(element => {

        return element.charCodeAt(0) - 96;
    });

    return text.join(' ');
  }

  console.log(alphabetPosition("The sunset sets at twelve o' clock."));