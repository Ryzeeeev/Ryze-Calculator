

const display = document.getElementById("display")

function displayApp(input) {
    display.value += input;
}

function cleardisplayApp() {
    display.value = "";
}

function calcul() {
    try {
        display.value = eval(display.value)
    } catch(error) {
        display.value = "Error"
    }
}
