import styles from "./CardList.module.css";
import Card from "../Card/Card";

const CardList = ({ images, view, onCardClick }) => {
  const getClassName = () => {
    if (view === "Grid") {
      return "card-list__grid";
    }
    return "card-list__slide";
  };

  return (
    <div className={styles.wrapper}>
      <ul className={styles[getClassName()]}>
        {images.map((img) => (
          <Card img={img} view={view} key={img.id} onCardClick={onCardClick} />
        ))}
      </ul>
    </div>
  );
};

export default CardList;
