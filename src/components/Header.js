import { useContext, useEffect, useRef, useState } from "react";
import { ListContext } from "../providers/list-context";
// import { AuthContext } from "../providers/auth-context";

export function Header({ title, text }) {
  const inputRef = useRef(null);
  const { addTodo } = useContext(ListContext);
  // const { role, name } = useContext(AuthContext);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleTaskInput(event) {
    // if (role !== "admin") {
    //   alert("You are not an admin");
    //   return;
    // }
    if (event.key === "Enter") {
      addTodo(event.target.value);
      event.target.value = "";
    }
  }

  return (
    <header className="header">
      <h1>{title}</h1>
      <input
        className="new-todo"
        ref={inputRef}
        placeholder={text}
        onKeyUp={handleTaskInput}
        autoFocus
      />
    </header>
  );
}
