/* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.*/

function solution(number){
  let total = 0;
  const filteredList = number.filter((number) =>  {
    if (number % 3 === 0 || number % 5 === 0) {
    return number;
    if (number < 0) {
      return 0;
    }
  }
  })
  
  const sum = filteredList.forEach((number) => {
      total = total + number;
  })
  return total
}

solution([1,2,3,4,5,6,7,8,9]);
