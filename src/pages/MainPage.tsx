import { useEffect, useState } from "react";
import styles from "../styles/pages/mainpage.module.scss";
import Navbar from "../components/Navbar";
import CardList from "../components/CardList";
import { Book } from "../types/types";
import bookData from "../assets/data.json";

function MainPage() {
  const [books, setBooks] = useState<Book[]>(bookData);

  return (
    <div className={styles.pageContainer}>
      <div>
        <div>heaader</div>
        <div>searchbar</div>
      </div>
      <div className={styles.body}>
        <div className={styles.category}>
          <Navbar />
        </div>
        <div className={styles.contentsContainer}>
          <CardList books={books} />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
