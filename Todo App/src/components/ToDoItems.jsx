import ToDoItem from "./ToDoItem";

const ToDoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <>
      {todoItems.map((ele, key) => (
        <ToDoItem
          key={ToDoItem.name}
          todoName={ele.name}
          todoDate={ele.dueDate}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </>
  );
};

export default ToDoItems;
