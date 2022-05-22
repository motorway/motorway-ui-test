import cn from "classnames";
import styles from "./Card.module.css";

const Card = ({ img, view, onCardClick }) => {
  const getClassName = () => {
    if (view === "Grid") {
      return "card_grid";
    }
    return "card_gallery";
  };

  const handleCardClick = () => {
    onCardClick(img.description, img.alt_description, img.url, img.user.name);
  };

  return (
    <li
      key={img.id}
      onClick={handleCardClick}
      className={cn(styles.card, styles[getClassName()])}
    >
      <div className={styles["card-image__container"]}>
        <img
          src={`${img.url}.jpg`}
          alt={img.alt_description}
          className={styles["card-image"]}
        />
        <div className={styles.card__like}>
          <button className={styles["card__like-icon"]}></button>
          <p className={styles["card__like-counter"]}>{img.likes}</p>
        </div>
      </div>
      <div className={styles.card__caption}>
        <div className={styles["card__user-img-wrapper"]}>
          <img
            src={`${img.user.profile_image}.webp`}
            alt=''
            className={styles["card__user-img"]}
          />
        </div>
        <div>
          <p className={styles["card__user-info"]}>{img.user.name}</p>
        </div>
      </div>
    </li>
  );
};

export default Card;
