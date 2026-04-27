import { Link } from "react-router-dom"
import styles from "../styles/Navigation.module.css";

export default function Navigation() {
  console.log("RENDER Navigation");
  return (
    <nav className={styles.navBar}>
      <Link to="/" className={styles.navLink}>Home</Link> 
      <Link to="/items" className={styles.navLink}>Books</Link> 
      <Link to="/add" className={styles.navLink}>Add</Link> 
      <Link to="/class/items" className={styles.navLink}>Class Items</Link> 
      <Link to="/about" className={styles.navLink}>About</Link>
    </nav>
  )
}