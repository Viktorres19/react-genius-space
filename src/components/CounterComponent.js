import { useState } from 'react';
const CounterComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 10) {
      setCount((prevState) => prevState + 1);
    }
  }
  const decrement = () => {
    if (count > 0) {
      setCount((prevState) => prevState - 1);
    }
  }
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default CounterComponent