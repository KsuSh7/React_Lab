import { memo } from "react";
import { Link } from "react-router-dom";
import type { Book } from "../types/Book";
import styles from "../styles/Items.module.css";
import { useDispatch } from "react-redux";
import { removeItem } from "../store/itemsSlice";
import type { AppDispatch } from "../store";
import { useNavigate } from "react-router-dom";

interface Props {
  book: Book;
}

function ItemCard({ book }: Props) {
  console.log("RENDER ItemCard: ", book.id);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleDelete = () => {
    dispatch(removeItem(book.id));
  };

  return (
    <li className={styles.listItemWrapper}>
      <Link to={`/items/${book.id}`} className={styles.listItem}>
        {book.title} - {book.author}
      </Link>
      <div>
        <button className={styles.deleteBtn} onClick={handleDelete}>
        Delete
        </button>
        <button onClick={() => navigate(`/redux/edit/${book.id}`)} className={styles.editBtn}>Edit</button>
      </div>
      
    </li>
  );
}

export default memo(ItemCard);
