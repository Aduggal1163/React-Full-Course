import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import "./App.css"
import TodoItems from "./Components/TodoItems";
function App() {
  const todoItems=[
    {
      name:"Chicken & eggs",
      dueDate:'24/1/2025',
    },
    {
      name:"Milk",
      dueDate:'24/1/2025',
    }
  ]
  return (
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <TodoItems todoItems={todoItems}/>
      </center>
  );
}

export default App;
