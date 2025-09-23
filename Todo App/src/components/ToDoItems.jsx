<<<<<<< HEAD
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
=======
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
>>>>>>> bcc69c020710eb416c918aed627af15e2b2dd9fd
