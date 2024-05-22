import { useEffect, useReducer, useState, useRef } from 'react';
import './App.css';
import UnmountComponent from './components/UnmountComponent';

const App = () => {
  const headerRef = useRef();
  const inputRef = useRef();
  const handleFocus = () => {
    inputRef.current.focus();
    console.log(inputRef.current.value)
  }
  console.log(headerRef.current)
  const reducer = (state, action) => {
    if(action.type === 'increment') {
      return {count: state.count + 1}
    }
    if(action.type === 'decrement') {
      return {count: state.count - 1}
    }
    if(action.type === 'reset') {
      return {count: 0}
    }
  }
  const [value, dispatch] = useReducer(reducer, { count: 0 })
  // const [isMounted, setIsMounted] = useState(false)

  const handleClick = (type) => {
    // setValue((prevValue) => prevValue + 1);
    dispatch(type)
  }
  return (
    <div className='App'>
      <header className='App-header' ref={headerRef}>
      <input ref={inputRef} />
      <p>{value.count}</p>
      {/* <div>
        {isMounted ? <UnmountComponent /> : <div>Who are you</div> }
      </div> */}
        <button onClick={() => handleClick({type: 'increment'})}>Inc</button>
        <button onClick={() => handleClick({type: 'decrement'})}>Dec</button>
        <button onClick={() => handleClick({type: 'reset'})}>Reset</button>
        <button onClick={handleFocus}>Focus</button>
      </header>
    </div>
  )
}

export default App;
