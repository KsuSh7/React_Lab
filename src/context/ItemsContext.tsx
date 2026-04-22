import { createContext, useState, useCallback } from "react";
import type { ReactNode } from "react";
import type { Book } from "../types/Book.tsx"
import { books as initialBooks } from "../data/books";

interface ItemsContextType {
  items: Book[];
  addItem: (book: Book) => void;
}

export const ItemsContext = createContext<ItemsContextType>({
  items: [],
  addItem: () => {}
});

export function ItemsProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Book[]>(initialBooks);

  const addItem = useCallback((book: Book) => {
    setItems(prev => [...prev, book]);
  }, []);

  return (
    <ItemsContext.Provider value={{ items, addItem }}>
      {children}
    </ItemsContext.Provider>
  );
}