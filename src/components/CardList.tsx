import { Book } from "../types/types";
import Card from "./Card";
import styles from "../styles/components/card.module.scss";
interface CardListProps {
  books: Book[];
}
function CardList({ books }: CardListProps) {
  return (
    <div className={styles.cardListContainer}>
      {books.map((book) => (
        <div className={styles.cardContainer}>
          <Card variant="thumbnail">
            <img className={styles.image} src={book.thumbnail} />
            <div className={styles.hoverCard}>
              <div>{book.title}</div>
              <div>
                {book.authors.map((author) => (
                  <div>{author}</div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default CardList;
