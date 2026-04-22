import { useContext, useMemo, useState, useCallback } from "react";
import { ItemsContext } from "../context/ItemsContext";
import ItemCard from "../components/ItemCard.tsx";
import styles from "../styles/Items.module.css";

export default function Items() {
  const { items } = useContext(ItemsContext);
  const [search, setSearch] = useState("");

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, []);

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
        onChange={handleSearch}
      />

      <ul className={styles.list}>
        {filtered.map(book => (
          <ItemCard key={book.id} book={book} />
        ))}
      </ul>
    </div>
  );
}
