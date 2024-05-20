import { useState } from 'react';
import './App.css';
import CounterComponent from './components/CounterComponent';

function App() {
  const [input, setInput] = useState('')
  const [item, setItem] = useState(['First element'])

  const onClickHandler = () => {
    // const newElement = 'new element';
    const updatedElement = [...item, input];
    setItem(updatedElement)
    setInput('')
  }
  const onChangeHandler = (e) => {
      const value = e.target.value;
      console.log('change')
      setInput(value);
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>{input}</p>
        <input type="text" value={input} onInput={onChangeHandler} />
        <ul>
          {item.map((element, index) => (
            <li key={index}>{element} {index}</li>
            ))}
        </ul>
        <button onClick={onClickHandler}>Add new element</button>
      </header>
      <main className="main">
        <CounterComponent />
      </main>
    </div>
  );
}

export default App;
