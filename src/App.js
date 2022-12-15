import "./App.css";
import "./providers/list-context";
import { TodosApp } from "./components/todos-app";
import { useRef, useState, useContext } from "react";
// import { AuthContext } from "../providers/auth-context";

function App() {
  const [lists, setLists] = useState([]);
  const listRef = useRef(null);
  // const { user } = useContext(AuthContext);
  const [user, setUser] = useState({ userName: null, password: null });
  const username = useRef(null);
  const password = useRef(null);

  function userLogin() {
    user.userName = username.current.value;
    user.password = password.current.value;
    setUser({ ...user });
  }

  function createApp() {
    lists.push(listRef.current.value);
    setLists([...lists]);
  }

  return (
    <>
      {user.userName && user.password ? (
        <>
          <input ref={listRef} type="text" />
          <button onClick={createApp}>ADD LIST</button>
          {lists.map((list) => {
            return <TodosApp appTitle={list} />;
          })}
        </>
      ) : (
        <>
          <input type="text" placeholder={"username"} ref={username} />
          <input type="password" placeholder={"password"} ref={password} />
          <button onClick={userLogin}>sign in</button>
        </>
      )}
    </>
  );
}

export default App;
