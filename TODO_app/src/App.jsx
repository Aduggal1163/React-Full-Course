import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import "./App.css";
import TodoItems from "./Components/TodoItems";
import { useState } from "react";
import Welcome from "./Components/Welcome";
function App() {
  const [todoItems, setTodoItems] = useState([]);
  const handleNewTodos = (itemName, itemDate) => {
    console.log(`${itemName}|| ${itemDate}`);
    const newTodoItems = [
      ...todoItems,
      {
        name: itemName,
        dueDate: itemDate,
      },
    ];
    setTodoItems(newTodoItems);
  };
  const handleDelete=(todoName)=>{
    const newTodoItems=todoItems.filter(item=>item.name !== todoName);
    setTodoItems(newTodoItems);
    // console.log("Item deleted")
  }
  return (
    <center classNameName="todo-container">
      <AppName />
      <AddTodo onNewTodos={handleNewTodos} />
      {todoItems.length===0?<Welcome/>: null}
      <TodoItems todoItems={todoItems} handleDeleteClick={handleDelete}/> 
    </center>
  );
}

export default App;
