/* Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.*/

function findShort(s){
    if (s !== "") {
      let word = s
      let sList = s.split(" ")
      for(let i = 0; i < sList.length; i++) {
        if (sList[i].length < word.length) {
          word = sList[i]
        }
      }
      return word.length;
    }
    
  }

  console.log(findShort("o rato rooeu a roupa do rei de roma"))
  //demorou 767ms
