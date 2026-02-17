
////Function to Display///
function appendToDisplay(input) {
    const inputvalue = document.display.inputvalue.value;

    document.display.inputvalue.value = inputvalue + input;
}

///Function to Check if the values are valid///
function check(total) {
     for (let i = 0; i < total.length; i++) {
        let char = total[i].toUpperCase();

        if (
            (char >= '0' && char <= '9') ||
            (char >= 'A' && char <= 'F') ||
            char === '+' || char === '-' ||
            char === ' '
        ) {
            continue; // valid 
        } else {
            return false; // invalid 
        }
    }

    return true; // valid
}

////Function to Calculate///
function calculate() {
    let total = document.display.inputvalue.value;
    if (!total) {
        alert("Error! please enter a value!");
        return;
    }
    if (!check(total)) {
        alert("Invalid input! Only 0-9 and A-F are allowed!");
        return;
    }
    if (total){
        let decimal = "";
        let currentHex = "";

        for (let i = 0; i < total.length; i++) {
                let char = total[i].toUpperCase();
            if (char >= '0' && char <= '9') {
                currentHex += char;
            }
            else if (char >= 'A' && char <= 'F') {
                currentHex += char;
            }
            else if (char == '+' || char == '-') {
            if (currentHex !== "") {
                decimal += parseInt(currentHex, 16);
                currentHex = "";
            }
            decimal += char;
            }
        }
        if (currentHex !== "") {
            decimal += parseInt(currentHex, 16);
        }
        const resultDecimal = Function("return " + decimal)();
        const resultHex = resultDecimal.toString(16).toUpperCase();
        document.display.inputvalue.value = resultHex;
    }

}

////Function to Backspace///
function backspace() {
    let inputvalue = document.display.inputvalue.value;
    inputvalue = inputvalue.slice(0, -1);
    document.display.inputvalue.value = inputvalue;
}

////Function to Clear///
function clearDisplay() {
    document.display.inputvalue.value = "";
}
