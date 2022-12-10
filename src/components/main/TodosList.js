import { useState } from "react";

function TodosList({ items, onRemoveItem, onEditEnter, onCheckedCompleted }) {
  let [taskToEdit, setTaskToEdit] = useState([]);

  function handleDbClick(event, item) {
    // console.log("enter the handleDbClick");
    taskToEdit = item.id;
    // console.log(
    //   `this is the original title id: ${titleToEdit} and this is its value: ${item.title}`
    // );
    setTaskToEdit(taskToEdit);
  }

  function handleEditItemEnter(event, item) {
    if (event.key === "Enter") {
      let newTitle = event.target.value;
      taskToEdit = "";
      setTaskToEdit(taskToEdit);
      onEditEnter(newTitle, item);
    }
  }

  return (
    <ul className="todo-list">
      {items.map((item) => (
        <li
          key={item.id}
          className={
            (item.completed ? "completed" : "") +
            (item.id === taskToEdit ? "editing" : "")
          }
        >
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={item.completed}
              onChange={() => onCheckedCompleted(item)}
            />
            <label onDoubleClick={(event) => handleDbClick(event, item)}>
              {item.title}
            </label>
            <button className="destroy" onClick={() => onRemoveItem(item)} />
          </div>
          <input
            className="edit"
            onKeyUp={(event) => handleEditItemEnter(event, item)}
            defaultValue={item.title}
          />
        </li>
      ))}
    </ul>
  );
}

export default TodosList;
