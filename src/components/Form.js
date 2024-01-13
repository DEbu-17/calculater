import { useState } from "react";

const Form = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleOperation = (operation) => {
    if (num1 === "" || num2 === "") {
      setErrorMessage("Error: Num1 and Num2 must not be empty");
    } else {
      setErrorMessage("");
      switch (operation) {
        case "+":
          setResult(Number(num1) + Number(num2));
          break;
        case "-":
          setResult(Number(num1) - Number(num2));
          break;
        case "*":
          setResult(Number(num1) * Number(num2));
          break;
        case "/":
          setResult(Number(num1) / Number(num2));
          break;
        default:
          break;
      }
    }
  };

  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="num1"
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="text"
        placeholder="num2"
        onChange={(e) => setNum2(e.target.value)}
      />
      <div className="btn">
        <button onClick={() => handleOperation("+")}>+</button>
        <button onClick={() => handleOperation("-")}>-</button>
        <button onClick={() => handleOperation("*")}>*</button>
        <button onClick={() => handleOperation("/")}>/</button>
      </div>

      {errorMessage && (
        <div className="error-message">
          <p className="error">{errorMessage}</p>
        </div>
      )}

      {result !== "" && !errorMessage && (
        <div className="success-message">
          <p className="success">Successful</p>
          <p>Result: {result}</p>
        </div>
      )}
    </form>
  );
};

export default Form;
