import { useEffect,useState } from "react";
import { ReactDOM } from "react";


const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const incrementClick = () => {
    setCounterValue(counterValue + inputValue);
  };
  const inputChange = (e) => {
    setInputValue(Number(e.target.value));
  };
  const decrementClick = () => {
    setCounterValue(counterValue - inputValue);
  };

  return (
    <div>
      <h1>Counter :{counterValue}</h1>
      <input onChange={inputChange} type="text" />
      <button onClick={incrementClick}>+</button>
      <button onClick={decrementClick}>-</button>
    </div>
  );
};
export default Counter;
