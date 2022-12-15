import { useContext } from "react";
import { ListContext } from "../providers/list-context";

export function Footer({ onClearCompleted, itemLeftCount }) {
  return (
    <div className="Footer">
      <span className="todo-count">
        <strong>{itemLeftCount}</strong> items left
      </span>
      <button onClick={onClearCompleted} className="clear-completed">
        Clear Completed
      </button>
    </div>
  );
}
