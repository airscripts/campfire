// Importing: Dependencies.
import React from "react";

// Importing: Scripts.
import replaceCharacter from "./scripts/replaceCharacter.script.js";

// Importing: Styles.
import "./App.css";

// Declaring constants.
const OPERATORS = ["+", "-", "*", "/"];
const SUBTRACT_OPERATOR = ["-"];
const ZERO = ["0"];
const DECIMAL = ["."];
const DEFAULT_EXPRESSION = "0\n0";
const MATH_NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const ALPHABET_NUMBERS = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

// Declaring Application.
function App() {
  // Declaring states.
  const [display, setDisplay] = React.useState({
    expression: DEFAULT_EXPRESSION,
    currentNumber: "",
    previousNumber: "",
    currentValue: "",
    previousValue: "",
    hasEqualBeenPressed: false,
  });

  // Declaring variables.
  let expression = display.expression.split("\n")[0];
  let result = display.expression.split("\n")[1];

  // Returning JSX to be displayed.
  return (
    <div className="calculator">
      <div className="calculator__container">
        <div className="calculator__screen">
          <div id="display">
            <div style={{ wordWrap: "break-word" }}>
              <span id="display__digits">
                {result !== "0" ? "" : expression}
              </span>
            </div>

            <div style={{ wordWrap: "break-word" }}>
              <span id="display__digits">
                {result === "0" ? "" : result}
              </span>
            </div>
          </div>
        </div>

        <div className="calculator__digits">
          <button onClick={() => clearDisplay()} id="clear">
            <span>AC</span>
          </button>

          <button onClick={() => setDisplayValues("+")} id="add">
            <span>+</span>
          </button>

          <button onClick={() => setDisplayValues("-")} id="subtract">
            <span>-</span>
          </button>

          <button onClick={() => setDisplayValues("*")} id="multiply">
            <span>x</span>
          </button>

          <button onClick={() => setDisplayValues("/")} id="divide">
            <span>/</span>
          </button>

          {MATH_NUMBERS.map((number, index) => {
            return (
              <button
                onClick={() => setDisplayValues(number)}
                id={ALPHABET_NUMBERS[index]}
                key={number}
              >
                <span>{number}</span>
              </button>
            );
          })}

          <button onClick={() => setDisplayValues(".")} id="decimal">
            <span>.</span>
          </button>

          <button onClick={() => evaluateExpression()} id="equals">
            <span>=</span>
          </button>
        </div>
      </div>
    </div>
  );

  /**
   * This function is called whenever a displayable value is clicked.
   *
   * @param value
   * @returns
   */
  function setDisplayValues(value) {
    // Declaring variables.
    let isOperatorInValue = OPERATORS.includes(value);
    let isOperatorInCurrentValue = OPERATORS.includes(display.currentValue);
    let splitCurrentNumber = display.currentNumber.split("");
    let isDecimalInValue = DECIMAL.includes(value);
    let hasCurrentNumberDecimal = splitCurrentNumber.includes(".");

    let isOperatorInValueAndCurrentValue =
      isOperatorInValue && isOperatorInCurrentValue;

    // If is first digit, we proceed with edge cases check.
    if (!display.currentValue && !display.hasEqualBeenPressed) {
      firstDigit(value);
      return;
    }

    // If we have an operator in the current value pointed and in the last value
    // we check if we have to omit its insert or not.
    if (isOperatorInValueAndCurrentValue) {
      checkForDoubleOperator(value);
      return;
    }

    // If we find operator in value, we pass from here.
    if (isOperatorInValue) {
      // This section is called after evaluateExpression has been called.
      if (display.hasEqualBeenPressed) {
        setDisplay({
          ...display,
          expression: `${result}${value}\n0`,
          previousValue: display.currentValue,
          currentValue: value,
          previousNumber: display.currentNumber,
          currentNumber: "",
          hasEqualBeenPressed: false,
        });

        return;
      }

      setDisplay({
        ...display,
        expression: `${expression}${value}\n${result}`,
        previousValue: display.currentValue,
        currentValue: value,
        previousNumber: display.currentNumber,
        currentNumber: "",
      });

      return;
    }

    // If we have decimal in value and current number has already a decimal, we skip.
    if (isDecimalInValue) {
      if (hasCurrentNumberDecimal) {
        return;
      }
    }

    // If any edge case is met, we simply add value to the expression.
    setDisplay({
      ...display,
      expression: `${expression}${value}\n${result}`,
      previousValue: display.currentValue,
      currentValue: value,
      currentNumber: `${display.currentNumber}${value}`,
    });
  }

  /**
   * This function checks for first digit edge cases.
   *
   * @param value
   * @returns
   */
  function firstDigit(value) {
    // If the first digit is a zero we don't do anything.
    if (ZERO.includes(value)) {
      return;
    }

    // If the first digit is a decimal we set 0 with the decimal pointer.
    if (DECIMAL.includes(value)) {
      setDisplay({
        ...display,
        expression: `0${value}\n${result}`,
        previousValue: display.currentValue,
        currentValue: `0${value}`,
        currentNumber: `${display.currentNumber}${value}`,
      });

      return;
    }

    // If no edge case has been found, we simply add value to expression.
    setDisplay({
      ...display,
      expression: `${value}\n${result}`,
      previousValue: display.currentValue,
      currentValue: value,
      currentNumber: `${display.currentNumber}${value}`,
    });
  }

  function checkForDoubleOperator(value) {
    // Declaring variables.
    let newExpression;
    let isValueSubtractOperator = SUBTRACT_OPERATOR.includes(value);

    let isSecondOperator = OPERATORS.includes(
      expression[expression.length - 2]
    );

    let isValueSubtractAndNotSecondOperator =
      isValueSubtractOperator && !isSecondOperator;

    // Checking if there is a possibility to insert a minus after an operator.
    if (isValueSubtractAndNotSecondOperator) {
      setDisplay({
        expression: `${expression}${value}\n${result}`,
        previousValue: display.currentValue,
        currentValue: value,
        previousNumber: display.currentNumber,
        currentNumber: "",
      });

      return;
    }

    if (isSecondOperator) {
      // Replacing the operator.
      newExpression = replaceCharacter(expression, expression.length - 2, "");

      // Replacing the operator.
      newExpression = replaceCharacter(
        newExpression,
        newExpression.length - 1,
        value
      );

      // Setting state with the new expression.
      setDisplay({
        expression: `${newExpression}\n${result}`,
        previousValue: display.currentValue,
        currentValue: value,
        previousNumber: display.currentNumber,
        currentNumber: "",
      });

      // Returning back.
      return;
    }

    // Replacing the operator.
    newExpression = replaceCharacter(expression, expression.length - 1, value);

    // Setting state with the new expression.
    setDisplay({
      ...display,
      expression: `${newExpression}\n${result}`,
      previousValue: display.currentValue,
      currentValue: value,
      previousNumber: display.currentNumber,
      currentNumber: "",
    });

    // Returning back.
    return;
  }

  /**
   * This function evaluates the expression and gives back a result.
   *
   * @function evaluateExpression
   */
  function evaluateExpression() {
    // Declaring variables.
    let newExpression = expression;
    let isOperatorInLastIndex = OPERATORS.includes(
      expression[expression.length - 1]
    );

    // Preventing eval to generate a bug when an operator is in last expression's index.
    if (isOperatorInLastIndex) {
      // Replacing the operator.
      newExpression = replaceCharacter(expression, expression.length - 1, "");
    }

    setDisplay({
      ...display,
      expression: `${newExpression}\n${eval(newExpression)}`,
      previousValue: display.currentValue,
      currentValue: "",
      hasEqualBeenPressed: true,
    });
  }

  /**
   * This function clears display and sets expression to its default state.
   *
   * @function clearDisplay
   */
  function clearDisplay() {
    setDisplay({
      ...display,
      expression: DEFAULT_EXPRESSION,
      currentValue: "",
      previousValue: "",
      currentNumber: "",
      previousNumber: "",
      hasEqualBeenPressed: false,
    });
  }
}

// Exporting App.
export default App;
