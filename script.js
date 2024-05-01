function appendToDisplay(value) { // mostra o valor no display
    document.getElementById("display").value += value;
}

function clearDisplay() { // limpa o display
    document.getElementById("display").value = "";
}

function calculate() { // realiza as operações
    var expression = document.getElementById("display").value;
    var result = eval(expression);
    document.getElementById("display").value = result;
}
