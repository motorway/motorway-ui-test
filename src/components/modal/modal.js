import "./modal.css";
import ReactDom from "react-dom";
import { useEffect, useState } from "react";
import { ReactComponent as CloseIcon } from "../../icons/close.svg";

const Modal = ({ isOpen, onClose, children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  const onModalClick = (e) => {
    e.stopPropagation();
  };

  const onKeyDown = (e) => {
    if (e.code === 'Escape') {
      onClose();
    }
  }

  const element = (
    <div className="modal" onClick={onModalClick} onKeyDown={onKeyDown}>
      <div className="modal__header">
        <div className="modal__close" onClick={onClose}>
          <CloseIcon />
        </div>
      </div>
      <div className="modal__content">{children}</div>
    </div>
  );

  return mounted && isOpen
    ? ReactDom.createPortal(element, document.querySelector(".modal-container"))
    : null;
};

export default Modal;
