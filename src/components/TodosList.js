import { useContext, useState } from "react";
import { ListContext } from "../providers/list-context";

export function TodosList() {
  const { removeTodo, onEditEnter, onCheckedCompleted, todos } =
    useContext(ListContext);
  let [taskToEdit, setTaskToEdit] = useState([]);

  function handleDbClick(event, item) {
    taskToEdit = item.id;
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
      {todos.map((item) => (
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
            <button className="destroy" onClick={() => removeTodo(item)} />
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
