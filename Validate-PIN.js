/* TM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.*/

function validatePIN(pin) {
    let bool = false;
    const key = pin.split("");
    if (key.length == 4 || key.length == 6) {
      for (let i = 0; i < key.length; i++) {
        if (key[i] >= '0' && key[i] <= '9') {
            bool = true;
        } 
        else {
            bool = false;
            return false;
        }
        }
    } 
    else {
      bool = false;
    }
    return bool;
}

  
  console.log(validatePIN("0000"));