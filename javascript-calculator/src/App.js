import React from "react";

import replaceCharacter from "./scripts/replaceCharacter.script.js";
import "./App.css";

const ZERO = ["0"];
const DECIMAL = ["."];
const SUBTRACT_OPERATOR = ["-"];
const DEFAULT_EXPRESSION = "0\n0";
const OPERATORS = ["+", "-", "*", "/"];
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

function App() {
  const [display, setDisplay] = React.useState({
    currentValue: "",
    currentNumber: "",
    previousValue: "",
    previousNumber: "",
    hasEqualBeenPressed: false,
    expression: DEFAULT_EXPRESSION,
  });

  let expression = display.expression.split("\n")[0];
  let result = display.expression.split("\n")[1];

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
                key={number}
                id={ALPHABET_NUMBERS[index]}
                onClick={() => setDisplayValues(number)}
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

  function setDisplayValues(value) {
    let isOperatorInValue = OPERATORS.includes(value);
    let isOperatorInCurrentValue = OPERATORS.includes(display.currentValue);
    let splitCurrentNumber = display.currentNumber.split("");
    let isDecimalInValue = DECIMAL.includes(value);
    let hasCurrentNumberDecimal = splitCurrentNumber.includes(".");

    let isOperatorInValueAndCurrentValue =
      isOperatorInValue && isOperatorInCurrentValue;

    if (!display.currentValue && !display.hasEqualBeenPressed) {
      firstDigit(value);
      return;
    }

    if (isOperatorInValueAndCurrentValue) {
      checkForDoubleOperator(value);
      return;
    }

    if (isOperatorInValue) {
      if (display.hasEqualBeenPressed) {
        setDisplay({
          ...display,
          currentNumber: "",
          currentValue: value,
          hasEqualBeenPressed: false,
          expression: `${result}${value}\n0`,
          previousValue: display.currentValue,
          previousNumber: display.currentNumber,
        });

        return;
      }

      setDisplay({
        ...display,
        currentNumber: "",
        currentValue: value,
        previousValue: display.currentValue,
        previousNumber: display.currentNumber,
        expression: `${expression}${value}\n${result}`,
      });

      return;
    }

    if (isDecimalInValue) {
      if (hasCurrentNumberDecimal) {
        return;
      }
    }

    setDisplay({
      ...display,
      currentValue: value,
      previousValue: display.currentValue,
      expression: `${expression}${value}\n${result}`,
      currentNumber: `${display.currentNumber}${value}`,
    });
  }

  function firstDigit(value) {
    if (ZERO.includes(value)) return;

    if (DECIMAL.includes(value)) {
      setDisplay({
        ...display,
        currentValue: `0${value}`,
        expression: `0${value}\n${result}`,
        previousValue: display.currentValue,
        currentNumber: `${display.currentNumber}${value}`,
      });

      return;
    }

    setDisplay({
      ...display,
      currentValue: value,
      expression: `${value}\n${result}`,
      previousValue: display.currentValue,
      currentNumber: `${display.currentNumber}${value}`,
    });
  }

  function checkForDoubleOperator(value) {
    let newExpression;
    let isValueSubtractOperator = SUBTRACT_OPERATOR.includes(value);

    let isSecondOperator = OPERATORS.includes(
      expression[expression.length - 2]
    );

    let isValueSubtractAndNotSecondOperator =
      isValueSubtractOperator && !isSecondOperator;

    if (isValueSubtractAndNotSecondOperator) {
      setDisplay({
        currentNumber: "",
        currentValue: value,
        previousValue: display.currentValue,
        previousNumber: display.currentNumber,
        expression: `${expression}${value}\n${result}`,
      });

      return;
    }

    if (isSecondOperator) {
      newExpression = replaceCharacter(expression, expression.length - 2, "");

      newExpression = replaceCharacter(
        newExpression,
        newExpression.length - 1,
        value
      );

      setDisplay({
        currentNumber: "",
        currentValue: value,
        previousValue: display.currentValue,
        previousNumber: display.currentNumber,
        expression: `${newExpression}\n${result}`,
      });

      return;
    }

    newExpression = replaceCharacter(expression, expression.length - 1, value);

    setDisplay({
      ...display,
      currentNumber: "",
      currentValue: value,
      previousValue: display.currentValue,
      previousNumber: display.currentNumber,
      expression: `${newExpression}\n${result}`,
    });

    return;
  }

  function evaluateExpression() {
    let newExpression = expression;

    let isOperatorInLastIndex = OPERATORS.includes(
      expression[expression.length - 1]
    );

    if (isOperatorInLastIndex) {
      newExpression = replaceCharacter(expression, expression.length - 1, "");
    }

    setDisplay({
      ...display,
      currentValue: "",
      hasEqualBeenPressed: true,
      previousValue: display.currentValue,
      expression: `${newExpression}\n${eval(newExpression)}`,
    });
  }

  function clearDisplay() {
    setDisplay({
      ...display,
      currentValue: "",
      previousValue: "",
      currentNumber: "",
      previousNumber: "",
      hasEqualBeenPressed: false,
      expression: DEFAULT_EXPRESSION,
    });
  }
}

export default App;