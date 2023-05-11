function calculate() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const percent = inputValue * 0.035;
    const value = percent + inputValue;
    const result = value * 1.105;
    document.getElementById('result').innerHTML = `Result: ${result.toFixed(2)}`;
  }
  