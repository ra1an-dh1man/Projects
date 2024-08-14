import { useRef } from "react";
import { MdOutlinePlaylistAdd } from "react-icons/md";

const AddToDo = ({ onNewItem }) => {

  const todoNameElement = useRef(0);
  const dueDateElement = useRef(0);

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoName, dueDate);
  };

  return (
    <>
      <form className="row mg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="enter the text"
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={dueDateElement}
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success">
            <MdOutlinePlaylistAdd />
          </button>
        </div>
      </form>
    </>
  );
};

export default AddToDo;
