import { FC } from "react";
import { ModalProps } from "./Modal.types";
import "./style.scss";

const Modal: FC<ModalProps> = (props) => {
  const { children, onClose } = props;
  return (
    <div
      className="modalDefaultStyles"
      onClick={(e) => {
        const target = e.target as HTMLElement;
        if (target.classList.contains("modalDefaultStyles")) {
          onClose();
        }
      }}
    >
      <div className="contentDefaultStyles">{children}</div>
    </div>
  );
};

export default Modal;
