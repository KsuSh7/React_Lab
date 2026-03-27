import { Link } from "react-router-dom"
import { books } from "../data/books"
import styles from "../styles/Items.module.css";

export default function Items() {
  return (
    <div>
      <h2>Books</h2>

      <ul className={styles.list}>
        {books.map(book => (
          <li key={book.id}>
            <Link to={`/items/${book.id}`} className={styles.listItem}>
              {book.title} - {book.author}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}