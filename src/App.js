// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import { useEffect, useState } from "react";
// import { logDOM } from "@testing-library/react";

function App() {
  const [todos, setTodos] = useState([]);
  const [noneCompletedItemsCount, setNoneCompletedItemsCount] = useState(0);
  // const [taskToEdit, setTaskToEdit] = useState([]);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((response) => response.json())
  //     .then(setTodos);
  // }, []);

  useEffect(() => {
    const uncompleted = todos.filter((todo) => !todo.completed);
    setNoneCompletedItemsCount(uncompleted.length);
  }, [todos]);

  const appTitle = "TodosApp";

  // let todos = [
  //   { id: Date.now(), title: "Learn React", completed: false },
  //   { id: Date.now(), title: "Listen to Nir React", completed: false },
  //   { id: Date.now(), title: "Learn JS", completed: true },
  // ];

  const addTodo = (title) => {
    const newTodos = todos.concat([
      { id: Date.now(), title, completed: false },
    ]);
    setTodos(newTodos);
  };

  const editTodo = (title, item) => {
    item.title = title;
    setTodos([...todos]);
  };

  // const editTodo = (id, newTitle) => {
  //   const newTodos = todos.map((item) => {
  //     if (id === item.id) {
  //       return { ...item, title: newTitle };
  //     }
  //     return item;
  //   });
  //   setTodos(newTodos);
  // };

  const removeTodo = (todoToRemove) => {
    const newTodos = todos.filter(
      (currentTodo) => currentTodo.id !== todoToRemove.id
    );
    setTodos(newTodos);
    console.log(todos);
  };

  const updateCheckbox = (item) => {
    item.completed = !item.completed;
    setTodos([...todos]);
  };

  const clearAllCompletedItems = () => {
    const newTodos = todos.filter((currentTodo) => !currentTodo.completed);
    setTodos(newTodos);
  };

  const toggleAllItems = (checkedValue) => {
    const newTodos = todos.map((todo) => ({
      ...todo,
      completed: checkedValue,
    }));
    setTodos(newTodos);
    console.log(todos);
  };

  return (
    <section className="todoapp">
      <Header
        title={appTitle}
        onAddItem={addTodo}
        text={"What needs to be done?"}
      />
      <Main
        items={todos}
        onToggleAll={toggleAllItems}
        onRemoveItem={removeTodo}
        onCheckedCompleted={updateCheckbox}
        onEditEnter={editTodo}
      />
      <Footer
        itemLeftCount={noneCompletedItemsCount}
        onClearCompleted={clearAllCompletedItems}
      />
    </section>
  );
}

export default App;
