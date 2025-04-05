import { useState } from "react";
import styles from "../styles/components/navbar.module.scss";
function Navbar() {
  const [currentCategoryId, setCurrentCategoryId] = useState(0);
  const [category, setCategory] = useState([
    { id: 0, value: "LIBRARY", route: "/library" },
    { id: 1, value: "CURRENTLY READING", route: "/currently" },
    { id: 2, value: "WISHLIST", route: "/wishlist" },
    { id: 3, value: "FINISHED", route: "/finished" },
    { id: 4, value: "TIMELINE", route: "/timeline" },
    { id: 5, value: "PROFILE", route: "/profile" },
  ]);
  function handleCategoryClick(id: number) {
    setCurrentCategoryId(id);
  }
  return (
    <div className={styles.navbarContainer}>
      {category.map((item) => (
        <div
          className={styles.navbarItem}
          onClick={() => handleCategoryClick(item.id)}
        >
          {item.value}
        </div>
      ))}
    </div>
  );
}

export default Navbar;
