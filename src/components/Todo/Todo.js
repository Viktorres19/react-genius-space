import { useState } from 'react';
import './Todo.css';

const Todo = () => {
  const [input, setInput] = useState('')
  const [item, setItem] = useState(['First element'])

  const onClickHandler = () => {
    const updatedElement = [...item, input];
    setItem(updatedElement)
    setInput('')
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      console.log('Enter key pressed')
      onClickHandler()
    }
  }
  const deleteItem = (index) => {
    const updatedItems = item.filter((_, i) => i !== index)
    setItem(updatedItems)
  }
  return (
    <div className="Todo">
        {item.length > 0 ? 
          <h3>The number of items: {item.length}</h3>
          :
          <h3>You don't have any items in your list</h3>
        }
        <input
          type="text" value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <ul>
          {item.map((element, index) => (
            <li key={index}>
              <span>{element} {index}</span>
              <button
                className="button button--red"
                onClick={() => deleteItem(index)}
              >
                Delete item
              </button>
            </li>
            ))}
        </ul>
        <button
          onClick={onClickHandler}
        >
          Add new element
        </button>
    </div>
  );
}

export default Todo;