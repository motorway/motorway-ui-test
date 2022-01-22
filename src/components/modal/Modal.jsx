import React from "react";
import "./index.css";
import { ReactComponent as CloseIcon } from "../../ic-close.svg";

const Modal = ({ children, isOpen, onClose }) => {
  return (
    <div
      className="modal-window"
      style={
        !isOpen
          ? { display: "none", opacity: 0 }
          : { display: "flex", opacity: 1 }
      }
    >
      <div className="modal__content">
        <div className="modal__header">
          <div onClick={onClose}>
            <CloseIcon />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
