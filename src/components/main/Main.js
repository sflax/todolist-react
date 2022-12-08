import React from "react";
import TodosList from "./TodosList";

function Main({
  items,
  onToggleAll,
  onRemoveItem,
  onCheckedCompleted,
  onEditEnter,
}) {
  function handleToggleAll(event) {
    onToggleAll(event.target.checked);
  }

  return (
    <section className="main">
      <input
        className="toggle-all"
        onChange={handleToggleAll}
        type="checkbox"
      />
      <TodosList
        items={items}
        onRemoveItem={onRemoveItem}
        onCheckedCompleted={onCheckedCompleted}
        onEditEnter={onEditEnter}
      />
    </section>
  );
}
export default Main;
