import { useState } from 'react';
import './App.css';
import CounterComponent from './components/CounterComponent';
import RenderComponent from './components/RenderComponent';
import Todo from './components/Todo/Todo';
import TodosTwo from './components/Todo/TodosTwo';
import MyClassComponent from './components/MyClassComponent';
import MyClassTodoComponent from './components/MyClassTodoComponent';

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
  const [isShowTimer, setIsShowTimer] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        {isShowTimer ? <MyClassTodoComponent /> : <Todo />}
        {/* <MyClassComponent /> */}
        <TodosTwo todos={todos} deleteTodo={deleteTodo} addNewTodo={addNewTodo} />
        <button onClick={() => setIsShowTimer((prev) => !prev)}>Show / hide timer</button>
      </header>
      <main className="main">
        <RenderComponent />
        <CounterComponent />
      </main>
    </div>
  );
}

export default App;
