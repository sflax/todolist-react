import { useContext } from "react";
import { ListContext } from "../providers/list-context";

export function Footer() {
  const { clearAllCompletedItems, noneCompletedItemsCount } =
    useContext(ListContext);
  return (
    <div className="Footer">
      <span className="todo-count">
        <strong>{noneCompletedItemsCount}</strong> items left
      </span>
      <button onClick={clearAllCompletedItems} className="clear-completed">
        Clear Completed
      </button>
    </div>
  );
}
