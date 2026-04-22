import { useParams } from "react-router-dom";
import { useContext, useMemo } from "react";
import { ItemsContext } from "../context/ItemsContext";

export default function ItemDetails() {
  const { id } = useParams();
  const { items } = useContext(ItemsContext);

  const book = useMemo(() => {
    return items.find(b => b.id === Number(id));
  }, [items, id]);

  if (!book) return <p>Book not found</p>;

  return (
    <div>
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Pages: {book.pages}</p>
    </div>
  );
}
