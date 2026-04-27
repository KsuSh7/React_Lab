import { useState } from "react";
import styles from "../styles/AddItem.module.css";
import { useDispatch } from "react-redux";
import { addItem } from "../store/itemsSlice";
import type { AppDispatch } from "../store";

export default function AddItem() {
  console.log("RENDER AddItem");
  const dispatch = useDispatch<AppDispatch>();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [pages, setPages] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(addItem({
      id: Date.now(),
      title,
      author,
      genre,
      pages
    }));

    setTitle("");
    setAuthor("");
    setGenre("");
    setPages(0);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Add a book</h2>

      <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <input placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} />
      <input type="number" placeholder="Pages" value={pages} onChange={(e) => setPages(Number(e.target.value))} />

      <button type="submit">Add Book</button>
    </form>
  );
}
