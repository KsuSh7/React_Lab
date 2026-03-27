import { useState } from "react"
import styles from "../styles/AddItem.module.css";

export default function AddItem() {

  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [genre, setGenre] = useState("")
  const [pages, setPages] = useState<number>(0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    console.log({
      title,
      author,
      genre,
      pages
    })
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
    <h2>Add a book</h2>
    <input
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
    />

    <input
        placeholder="Author"
        onChange={(e) => setAuthor(e.target.value)}
    />

    <input
        placeholder="Genre"
        onChange={(e) => setGenre(e.target.value)}
    />

    <input
        type="number"
        placeholder="Pages"
        onChange={(e) => setPages(Number(e.target.value))}
    />

    <button>Add Book</button>

    </form>


  )
}