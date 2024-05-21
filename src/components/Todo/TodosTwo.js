import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import './Todo.css';

const TodosTwo = ({ todos, addNewTodo, deleteTodo }) => {
  const [input, setInput] = useState('')

  const onClickHandler = () => {
    if (input.length) {
      const newTodo = {
        id: uuidv4(),
        todo: input
      }
      addNewTodo(newTodo)
      setInput('')
    }
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      console.log('Enter key pressed')
      onClickHandler()
    }
  }
  return (
    <div className="Todo">
        {todos.length > 0 ? 
          <h3>The number of items: {todos.length}</h3>
          :
          <h3>You don't have any items in your list</h3>
        }
        <input
          type="text" value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span>{todo.todo}</span>
              <button
                className="button button--red"
                onClick={() => deleteTodo(todo.id)}
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

export default TodosTwo;