import { useParams } from "react-router-dom"
import { books } from "../data/books"

export default function ItemDetails() {
  const { id } = useParams()

  const book = books.find(b => b.id === Number(id))

  if (!book) return <p>Book not found</p>

  return (
    <div>
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Pages: {book.pages}</p>
    </div>
  )
}