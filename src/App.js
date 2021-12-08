import './App.css';
import React, { useState } from "react";

function App() {

  const [number, setNumber] = useState(''); let n1 = 0, n2 = 1, nextTerm;

  function fibonacci(number) {
    for (let i = 1; i <= number; i++) {
      nextTerm = n1 + n2;
      n1 = n2;
      n2 = nextTerm;
    }
    return n1;
  }

  return (
    <div className="App">
      <h1>Enter n number e.g. 10:</h1>
      <input onChange={c => setNumber(fibonacci(c.target.value))} />
      <h2>Calculated number based on n: {number}</h2>
    </div>
  );
}

export default App;
