import { useRef, useState } from "react";
import { IoMdAddCircle  } from "react-icons/io";
export default function AddTodo({ onNewTodos }) {
  // const [todoName, setTodoName] = useState();
  // const [todoDate, setTodoDate] = useState();
  // const noOfUpdates=useRef(0);
  const todoNameElement=useRef();
  const todoDateElement=useRef();
  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  //   noOfUpdates.current+=1;
  // };
  // const handleDateChange = (event) => {
  //   setTodoDate(event.target.value);
  //   console.log(noOfUpdates.current);
  // };
  const handleSubmit=(e)=>{
    const todoName=todoNameElement.current.value;
    const todoDate=todoDateElement.current.value;
    onNewTodos(todoName,todoDate);
    todoNameElement.current.value="";
    todoDateElement.current.value="";
    e.preventDefault(); 
    // setTodoName("");
    // setTodoDate("");    
  }
  return (
    <div class="container text-center">
      <form class="row ad-row"
            onSubmit={handleSubmit}>
        <div class="col-4">
          <input type="text" 
          ref={todoNameElement}
          // value={todoName} 
          // onChange={handleNameChange} 
          placeholder="Enter Todo Here" />
        </div>
        <div class="col-4">
          <input type="date"
          ref={todoDateElement}
          //  value={todoDate} onChange={handleDateChange}
          />
        </div>
        <div class="col-2">
          <button
            class="btn btn-success ad-button"
          >
            <IoMdAddCircle  />
          </button>
        </div>
      </form>
    </div>
  );
}
