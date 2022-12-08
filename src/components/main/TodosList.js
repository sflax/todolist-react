import { useState } from "react";

function TodosList({ items, onRemoveItem, onEditEnter, onCheckedCompleted }) {
  let [titleToEdit, setTitleToEdit] = useState([]);

  // function handleTaskRemove(item) {
  //   onRemoveItem(item);
  // }

  function handleDbClick(event, item) {
    console.log("enter the handleDbClick");
    titleToEdit = item.id;
    console.log(
      `this is the original title id: ${titleToEdit} and this is its value: ${item.title}`
    );
    setTitleToEdit(titleToEdit);
  }

  function handleEditItemEnter(event, item) {
    if (event.key === "Enter") {
      let newTitle = event.target.value;
      console.log(
        `this is our item.title: ${item.title} and this is our newTitle ${newTitle}`
      );
      titleToEdit = "";
      setTitleToEdit(titleToEdit);
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
            (item.id === titleToEdit ? "editing" : "")
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
