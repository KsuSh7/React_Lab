import { memo } from "react";
import { Link } from "react-router-dom";
import type { Book } from "../types/Book";
import styles from "../styles/Items.module.css";
import { useDispatch } from "react-redux";
import { removeItem } from "../store/itemsSlice";
import type { AppDispatch } from "../store";

interface Props {
  book: Book;
}

function ItemCard({ book }: Props) {
  console.log("RENDER ItemCard: ", book.id);
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = () => {
    dispatch(removeItem(book.id));
  };

  return (
    <li className={styles.listItemWrapper}>
      <Link to={`/items/${book.id}`} className={styles.listItem}>
        {book.title} - {book.author}
      </Link>

      <button className={styles.deleteBtn} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}

export default memo(ItemCard);
