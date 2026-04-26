import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Book } from "../types/Book";
import { books } from "../data/books";

interface ItemsState {
  items: Book[];
}

const initialState: ItemsState = {
  items: books,
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Book>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});


export const { addItem, removeItem } = itemsSlice.actions;
export default itemsSlice.reducer;
