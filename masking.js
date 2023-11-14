/* Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'. */

function maskify(cc) {
    let str = "";
    arr = cc.split("");
    for (let i = 0; i < arr.length; i++) {
        if ( i < arr.length - 4){
            arr[i] = '#';
        }
        str += arr[i];
    }
    return str;
}

console.log(maskify('4556364607935616'))