import React from "react";

function Header(props) {
  function handleTaskInput(event) {
    if (event.key === "Enter") {
      if (!event.target.value) {
        event.target.value = "double click here to add a task";
      }
      props.onAddItem(event.target.value);
      event.target.value = "";
    }
  }

  return (
    <header className="header">
      <h1>{props.title}</h1>
      <input
        className="new-todo"
        placeholder={props.text}
        onKeyUp={handleTaskInput}
        autoFocus
      />
    </header>
  );
}

export default Header;
