import { useState } from "react";
const Car = (props) => {
  return <h2>I am a {props.brand}!</h2>;
};

const Garage = () => {
  const carName = "Ford";
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand={carName} />
    </>
  );
};

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
