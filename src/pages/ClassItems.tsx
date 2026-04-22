import React from "react";
import { ItemsContext } from "../context/ItemsContext";
import type { Book } from "../types/Book.tsx";
import ItemCard from "../components/ItemCard";
import styles from "../styles/Items.module.css";

export default class ClassItems extends React.PureComponent {
  static contextType = ItemsContext;
  declare context: React.ContextType<typeof ItemsContext>;

  render() {
    const { items } = this.context;

    return (
      <div>
        <h2>Books (Class Component)</h2>

        <ul className={styles.list}>
          {items.map((book: Book) => (
            <ItemCard key={book.id} book={book} />
          ))}
        </ul>
      </div>
    );
  }
}
