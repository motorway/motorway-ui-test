import styles from "./CardList.module.css";
import Card from "../Card/Card";

const CardList = ({ images, view }) => {
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
          <Card img={img} view={view} key={img.id} />
        ))}
      </ul>
    </div>
  );
};

export default CardList;
