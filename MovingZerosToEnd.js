/* Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements. */

function moveZeros(arr) {
    const zeros = arr.filter(element => element === 0);
    arr = arr.filter(element => element !== 0);
    arr = arr.concat(zeros);
    return arr;
}


console.log(moveZeros(['a', 'b', null, 'c', 'd', 1, 1, 3, 1, 9, {}, 9, +0, +0, +0, false, +0, +0, [], +0, +0, +0, +0, +0 ]));