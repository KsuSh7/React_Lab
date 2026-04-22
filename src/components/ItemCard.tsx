import { memo } from "react";
import { Link } from "react-router-dom";
import type { Book } from "../types/Book.tsx";
import styles from "../styles/Items.module.css";

interface Props {
  book: Book;
}

function ItemCard({ book }: Props) {
  return (
    <li >
      <Link to={`/items/${book.id}`} className={styles.listItem}>
        {book.title} - {book.author}
      </Link>
    </li>
  );
}

export default memo(ItemCard);
