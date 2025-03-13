import React from "react";

function App() {
  /* You will need to use many state to keep the input values and other needs */
  const [A, setA] = React.useState("");
  const [B, setB] = React.useState("");
  const [sum, setSum] = React.useState(null);
  const [error, setError] = React.useState("");
  /* You will need some function to handle the key pressed and button events */
  const handleAChange = (event) => {
    setA(event.target.value);
  };
  const handleBChange = (event) => {
    setB(event.target.value);
  };
  const compute = () => {
    const numA = parseFloat(A);
    const numB = parseFloat(B);

    if (isNaN(numA) || isNaN(numB)) {
      setError("A and B Shall be number!!");
      setSum(null);
    } else {
      setError("");
      setSum(numA + numB);
    }
  };

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input type="text" value={A} onChange={handleAChange} />

      <label>B =</label>
      <input type="text" value={B} onChange={handleBChange} />

      <label>A + B =</label>

      {/* When Compute button is clicked, this input displays the sum of the 2 numbers, or the error message in RED */}
      <input
        type="text" // Changed to text since error message isn't a number
        value={error ? error : sum !== null ? sum : ""}
        disabled
        style={{ color: error ? "red" : "black" }}
      />
      <button onClick={compute}>Compute</button>
    </main>
  );
}

export default App;
