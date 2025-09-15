import { MdDeleteForever } from "react-icons/md";

const ToDoItem = ({ todoName, todoDate, onDeleteClick }) => {
  return (
    <>
      <div className="row .mg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => onDeleteClick(todoName)}
          >
            <MdDeleteForever />
          </button>
        </div>
      </div>
    </>
  );
};

export default ToDoItem;
