import React from "react"
import { books } from "../data/books"
import type { Book } from "../types/Book"
import styles from "../styles/Items.module.css";

interface State {
  books: Book[]
}

export default class ClassItems extends React.Component<{}, State> {

  constructor(props: {}) {
    super(props)

    this.state = {
      books: books
    }
  }

  render() {
    return (
      <div>
        <h2>Books (Class Component)</h2>

        <ul className={styles.list}>
          {this.state.books.map(book => (
            <li key={book.id} className={styles.listItem}>
              {book.title} - {book.author}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}