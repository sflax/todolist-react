import { useTodos } from "../hooks/useTodos";
import { Header } from "./Header";
import { Main } from "./Main";
import { TodosList } from "./TodosList";
import { Footer } from "./Footer";
import { ListContext } from "../providers/list-context";

export function TodosApp({ appTitle }) {
  const todoApi = useTodos();

  return (
    <ListContext.Provider value={todoApi}>
      <section className="todoapp">
        <Header title={appTitle} />
        <Main>
          <TodosList />
        </Main>
        <Footer />
      </section>
    </ListContext.Provider>
  );
}
