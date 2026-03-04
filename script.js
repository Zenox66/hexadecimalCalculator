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

////Event Listener for Key "Enter"///
var input = document.getElementById("input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.getElementById("onEnter").click();
        event.preventDefault();
    }
});

////Function to Calculate///
function calculate() {
    let total = document.display.inputvalue.value;
    ///Checks Function if Value is empty///
    if (!total) {
        alert("Error! please enter a value!");
        return;
    }
    ///Call to Check Function///
    if (!check(total)) {
        alert("Invalid input! Only 0-9, A-F, +, and - values are allowed!");
        return;
    }

    ///Calculate///
    if (total){
        let decimal = "";
        let currentHex = "";

        for (let i = 0; i < total.length; i++) {
            ///Converts current characters into uppercase///
            let char = total[i].toUpperCase();
            if (char >= '0' && char <= '9') {
                currentHex += char;
            }
            else if (char >= 'A' && char <= 'F') {
                currentHex += char;
            }
            else if (char == '+' || char == '-') {
                if (currentHex !== "") {
                    ///ParseInt converts hexadecimal values into decimal///
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
         ///ToString converts decimal values into hexadecimal///
        const resultHex = resultDecimal.toString(16).toUpperCase();
        document.display.inputvalue.value = resultHex;
    }

}

////Function to Backspace - DISCONTINUED///
function backspace() {
    let inputvalue = document.display.inputvalue.value;
    inputvalue = inputvalue.slice(0, -1);
    document.display.inputvalue.value = inputvalue;
}

////Function to Clear///
function clearDisplay() {
    document.display.inputvalue.value = "";
}
