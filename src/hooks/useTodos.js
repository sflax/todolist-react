import { useEffect, useRef, useState } from "react";

export function useTodos() {
  const [todos, setTodos] = useState([]);
  const [noneCompletedItemsCount, setNoneCompletedItemsCount] = useState(0);
  // const countRef = useRef(0);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((response) => response.json())
  //     .then(setTodos);
  // }, []);

  useEffect(() => {
    const uncompleted = todos.filter((todo) => !todo.completed);
    setNoneCompletedItemsCount(uncompleted.length);
  }, [todos]);

  // const appTitle = "TodosApp";

  const addTodo = (title) => {
    const newTodos = todos.concat([
      { id: Date.now(), title, completed: false },
    ]);
    setTodos(newTodos);
  };
  const removeTodo = (todoToRemove) => {
    const newTodos = todos.filter(
      (currentTodo) => currentTodo.id !== todoToRemove.id
    );
    setTodos(newTodos);
    console.log(todos);
  };

  const editTodo = (title, item) => {
    item.title = title;
    setTodos([...todos]);
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
  return {
    todos,
    noneCompletedItemsCount,
    addTodo,
    removeTodo,
    editTodo,
    updateCheckbox,
    clearAllCompletedItems,
    toggleAllItems,
  };
}
