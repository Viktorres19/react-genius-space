import { useState } from 'react';
import './App.css';
import CounterComponent from './components/CounterComponent';
import RenderComponent from './components/RenderComponent';
import Todo from './components/Todo/Todo';
import TodosTwo from './components/Todo/TodosTwo';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, todo: 'firstTodo'},
    { id: 2, todo: 'secondTodo'},
    { id: 3, todo: 'thirdTodo'},
    { id: 4, todo: 'fourthTodo'},
  ])
  const addNewTodo = (newTodo) => {
    const updatedElement = [...todos, newTodo];
    setTodos(updatedElement)
  }
  const deleteTodo = (todoId) => {
    const updatedItems = todos.filter(todo => todo.id !== todoId)
    setTodos(updatedItems)
  }
  return (
    <div className="App">
      <header className="App-header">
        <Todo />
        <TodosTwo todos={todos} deleteTodo={deleteTodo} addNewTodo={addNewTodo} />
      </header>
      <main className="main">
        <RenderComponent />
        <CounterComponent />
      </main>
    </div>
  );
}

export default App;
