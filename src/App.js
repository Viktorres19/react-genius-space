import { useCallback, useMemo, useState, useEffect } from 'react';
import './App.css';
import ChildComponent from './ChildComponent';
import SeconChildComponent from './SeconChildComponent';
import { useCounter } from './hooks/useCounter';

const App = () => {
  const {value, increment, decrement} = useCounter()
  const [list, setList] = useState(["1", "2", "3", "4", "5"]);
  //при використанні цього хука буде ререндеритися тільки батьківський компонент, а його діти не будуть ререндеритися при зміні батька
  //useMemo використовується для виконання важкого обчислення
  //useCallback використовується для кешування
  //React.memo це HOG high ordered component - елемент високого порядку
  const memolizedList = useMemo(() => {
    return list
  }, [list])

  const handleListChange = () => {
    setList([...list, 6])
  }
  const handleUseCallbackExample = useCallback(() => {
    setList([...list, 6])
  }, [])
  useEffect(() => {
    handleUseCallbackExample()
    console.log('render');
  }, [handleUseCallbackExample])

  const handleClickCallback = () => setList([])
  return (
    <div className='App'>
      <header className='App-header'>
        <SeconChildComponent />
        {list.map((item, index) => {
          return <ChildComponent key={item} item={item} />
        })}
        {/* {memolizedList.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
        <button onClick={handleListChange}>Add button</button>
        <button onClick={handleClickCallback}>Handle click callback button</button> */}
        <button onClick={() => setList([...list, list.length + 1])}>On Click</button>
        <p>{value}</p>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>

        {/* use react класна ліба */}
      </header>
    </div>
  )
}

export default App;
