import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, handleDeleteClick }) => {
  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <TodoItem todoName={item.name} todoDate={item.dueDate} handleDeleteClick={handleDeleteClick}/>
      ))}
    </div>
  );
};
export default TodoItems;
