import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import { editItem } from "../store/itemsSlice";
import styles from "../styles/AddItem.module.css";

export default function EditItem() {
  console.log("RENDER EditItem");
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const book = useSelector((state: RootState) =>
    state.items.items.find(b => b.id === Number(id))
  );

  const [title, setTitle] = useState(book?.title ?? "");
  const [author, setAuthor] = useState(book?.author ?? "");
  const [genre, setGenre] = useState(book?.genre ?? "");
  const [pages, setPages] = useState<number>(book?.pages ?? 0);

  if (!book) return <p>Book not found</p>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(editItem({ id: book.id, title, author, genre, pages }));
    navigate(`/redux/items/${book.id}`);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Edit Book</h2>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <input placeholder="Author" value={author} onChange={e => setAuthor(e.target.value)} />
      <input placeholder="Genre" value={genre} onChange={e => setGenre(e.target.value)} />
      <input type="number" placeholder="Pages" value={pages} onChange={e => setPages(Number(e.target.value))} />
      <button type="submit">Save Changes</button>
    </form>
  );
}