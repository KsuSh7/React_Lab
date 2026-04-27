import styles from "../styles/Home.module.css";

export default function Home() {
  console.log("RENDER Home");
  return (
    <div className={styles.container}>
      <h1>Book App</h1>
      <p>Application for managing books.</p>
    </div>
  )
}