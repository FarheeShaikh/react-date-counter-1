import { useState } from "react";
import style from "./style.css";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("26 october 2025");
  date.setDate(date.getDate() + count);

  return (
    <div className="counter">
      <div className="controls">
        <button onClick={() => setStep((c) => c - 1)}>-</button>
        <span> Step : {step} </span>
        <button onClick={() => setStep((c) => c + 1)}>+</button>
      </div>
      <div className="controls">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span> Count : {count} </span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "today is "
            : count > 0
            ? `${count} days from today is  `
            : `${Math.abs(count)} days ago was `}
        </span>
        {date.toDateString()}
      </p>
    </div>
  );
}
export default App;
