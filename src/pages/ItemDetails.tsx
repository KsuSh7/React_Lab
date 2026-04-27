import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../store";
import { useMemo } from "react";

export default function ItemDetails() {
  const { id } = useParams();
  console.log("RENDER ItemDetails: ", id);
  const items = useSelector((state: RootState) => state.items.items);

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
