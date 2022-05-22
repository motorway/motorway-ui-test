import styles from "./Modal.module.css";

const Modal = ({ card, onOverlayClick, onClose }) => {
  if (!card) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.overlay} onClick={onOverlayClick}></div>
      <div className={styles.modal__container}>
        <figure className={styles.modal__card}>
          <img
            src={`${card.url}.jpg`}
            alt={card.alt_description}
            className={styles.modal__img}
          />
          <figcaption className={styles.modal__caption}>
            <p className={styles.modal__user}>{`${card.user}`}</p>
            {card.description && `${card.description}`}
          </figcaption>
        </figure>
        <button
          className={styles.modal__close}
          type='button'
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
};

export default Modal;
