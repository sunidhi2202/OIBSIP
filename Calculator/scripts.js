function clearDisplay() {
    document.getElementById('display').innerText = '';
}

function deleteLast() {
    let display = document.getElementById('display');
    display.innerText = display.innerText.slice(0, -1);
}

function appendCharacter(character) {
    document.getElementById('display').innerText += character;
}

function calculate() {
    let display = document.getElementById('display');
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = 'Error';
    }
}
