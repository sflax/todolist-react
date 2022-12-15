import "./App.css";
import "./providers/list-context";
import { TodosApp } from "./components/todos-app";
import { useRef, useState } from "react";

function App() {
  const [lists, setLists] = useState([]);
  const listRef = useRef(null);

  function createApp() {
    lists.push(listRef.current.value);
    setLists([...lists]);
  }

  return (
    <>
      <input ref={listRef} type="text" />
      <button onClick={createApp}>ADD LIST</button>
      {lists.map((list) => {
        return <TodosApp appTitle={list} />;
      })}
    </>
  );
}

export default App;
