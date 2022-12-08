import React from "react";

function Footer({ onClearCompleted, itemLeftCount }) {
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
export default Footer;
