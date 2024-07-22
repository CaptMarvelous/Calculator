let display = document.getElementById("display");
let buttons = document.querySelectorAll("button[type='button']");

let calculator = {
  displayValue: "",
  firstOperand: null,
  secondOperand: null,
  operator: null,

  updateDisplay: function() {
    display.value = this.displayValue;
  },

  handleButtonPress: function(button) {
    let value = button.value;

    if (value === "=") {
      this.calculate();
    } else if (value === "C") {
      this.clear();
    } else if (isNaN(value)) {
      this.setOperator(value);
    } else {
      this.appendValue(value);
    }

    this.updateDisplay();
  },

  appendValue: function(value) {
    this.displayValue += value;
  },

  setOperator: function(operator) {
    this.operator = operator;
    this.firstOperand = parseFloat(this.displayValue);
    this.displayValue = "";
  },

  calculate: function() {
    this.secondOperand = parseFloat(this.displayValue);
    let result = 0;

    switch (this.operator) {
      case "+":
        result = this.firstOperand + this.secondOperand;
        break;
      case "-":
        result = this.firstOperand - this.secondOperand;
        break;
      case "*":
        result = this.firstOperand * this.secondOperand;
        break;
      case "/":
        result = this.firstOperand / this.secondOperand;
        break;
    }

    this.displayValue = result.toString();
    this.firstOperand = null;
    this.secondOperand = null;
    this.operator = null;
  },

  clear: function() {
    this.displayValue = "";
    this.firstOperand = null;
    this.secondOperand = null;
    this.operator = null;
  }
};

buttons.forEach(button => {
  button.addEventListener("click", () => {
    calculator.handleButtonPress(button);
  });
});