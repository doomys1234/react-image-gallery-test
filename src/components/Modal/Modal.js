import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../../redux/appSlice";
import { modalImageSelector } from "../../redux/selectors";

import s from "./Modal.module.scss";

export default function Modal() {
  const dispatch = useDispatch();
  const modalImage = useSelector((state) => modalImageSelector(state));

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      dispatch(toggleModal());
    }
  };

  const onBackdropClose = (e) => {
    if (e.target.nodeName === "IMG") {
      return;
    }
    dispatch(toggleModal());
  };

  return (
    <div className={s.overlay} onClick={onBackdropClose}>
      <div className={s.modal}>
        <img className={s.image} src={modalImage} alt="#" />
      </div>
    </div>
  );
}
