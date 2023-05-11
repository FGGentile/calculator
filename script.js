function calculate() {
    var inputValue = document.getElementById('inputValue').value;
    var fivePercent = inputValue * 0.05;
    var value = fivePercent + inputValue;
    var result = value * 1.1;
    document.getElementById('result').innerHTML = "Result: " + result;
}
