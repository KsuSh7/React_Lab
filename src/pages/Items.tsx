import { useMemo, useState } from "react";
import ItemCard from "../components/ItemCard";
import styles from "../styles/Items.module.css";
import { useSelector } from "react-redux";
import type { RootState } from "../store";


export default function Items() {
  const items = useSelector((state: RootState) => state.items.items);
  const [search, setSearch] = useState("");


  const filtered = useMemo(() => {
    return items.filter(book =>
      book.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [items, search]);

  return (
    <div>
      <h2>Books</h2>

      <input
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul className={styles.list}>
        {filtered.map(book => (
          <ItemCard key={book.id} book={book} />
        ))}
      </ul>
    </div>
  );
}
