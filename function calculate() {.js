function calculate() {
    var inputValue = document.getElementById('inputValue').value;
    var fivePercent = inputValue * 0.05;
    var result = fivePercent * 1.1;
    document.getElementById('result').innerHTML = "Result: " + result;
}
