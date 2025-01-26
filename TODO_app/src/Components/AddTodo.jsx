import { useState } from "react";

export default function AddTodo({ onNewTodos }) {
  const [todoName, setTodoName] = useState();
  const [todoDate, setTodoDate] = useState();
  const handleNameChange = (event) => {
    setTodoName(event.target.value);
    
  };
  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
    
  };
  const handleSubmit=()=>{
    onNewTodos(todoName,todoDate);
    setTodoName("");
    setTodoDate("");
  }
  return (
    <div class="container text-center">
      <div class="row ad-row">
        <div class="col-4">
          <input type="text" value={todoName} onChange={handleNameChange} placeholder="Enter Todo Here" />
        </div>
        <div class="col-4">
          <input type="date" value={todoDate} onChange={handleDateChange}/>
        </div>
        <div class="col-2">
          <button
            onClick={handleSubmit}
            type="button"
            class="btn btn-success ad-button"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
