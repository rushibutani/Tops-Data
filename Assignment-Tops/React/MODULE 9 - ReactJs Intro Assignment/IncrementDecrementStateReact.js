import { useState } from "react";
import "./App(IncrementDecrementStateReact).css";

const App = () => {
  const state = useState();
  const [count, setCount] = useState(0);

  const IncNum = () => {
    setCount(count + 1);
  };

  const DecNum = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1> {count} </h1>
      <button onClick={IncNum}>Increament</button>
      <button onClick={DecNum}>Decreament</button>
    </div>
  );
};

export default App;
