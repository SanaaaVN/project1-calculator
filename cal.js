var screen = document.getElementById('screen');

function btnclick(value) {
    screen.value += value;
}

function clearscreen() {
    screen.value = "";
}

function backspace() {
    screen.value = screen.value.slice(0, -1);
}

function findResult() {
    try {
        if (screen.value !== "") {
            var result = eval(screen.value);
            
            if (result === Infinity || result === -Infinity) {
                screen.value = "undefined";
            } else {
                screen.value = result;
            }
        }
    } catch (error) {
        screen.value = "Error";
    }
}
