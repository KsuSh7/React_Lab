import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navigation from "./components/Navigation"
import Home from "./pages/Home"
import Items from "./pages/Items"
import ItemDetails from "./pages/ItemDetails"
import AddItem from "./pages/AddItem"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import ClassItems from "./pages/ClassItems"
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<Items />} />
          <Route path="/items/:id" element={<ItemDetails />} />
          <Route path="/add" element={<AddItem />} />
          <Route path="/class/items" element={<ClassItems />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App