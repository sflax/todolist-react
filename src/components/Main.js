import { useContext } from "react";
import { ListContext } from "../providers/list-context";

export function Main({ children }) {
  const { toggleAllItems } = useContext(ListContext);
  function handleToggleAll(event) {
    toggleAllItems(event.target.checked);
  }

  return (
    <section className="main">
      <input
        className="toggle-all"
        onChange={handleToggleAll}
        type="checkbox"
      />
      {children}
    </section>
  );
}
