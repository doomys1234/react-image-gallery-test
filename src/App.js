import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import MoonLoader from "react-spinners/MoonLoader";
import { toast } from "react-toastify";
import { useScrollBy } from "react-use-window-scroll";
import { useSelector, useDispatch } from "react-redux";
import {
  openModalSelector,
  pageSelector,
  statusSelector,
  imagesSelector,
  errorSelector,
} from "./redux/selectors";
import operations from "./redux/imagesOperations";

import "react-toastify/dist/ReactToastify.css";
import HeaderBar from "./components/HeaderBar/HeaderBar.js";
import ImageGallery from "./components/ImageGallery/ImageGallery.js";
import Button from "./components/Button/Button.js";
import Modal from "./components/Modal/Modal.js";
import { setStatus } from "./redux/appSlice";

const myStyle = {
      marginLeft: "auto",
  marginRight: "auto",
  marginTop: "200px",
      color: 'rgba(0, 0, 0, 1)',
    };

export default function App() {
  const scrollBy = useScrollBy();
  const dispatch = useDispatch();
  const page = useSelector((state) => pageSelector(state));
  const status = useSelector((state) => statusSelector(state));
  const openModal = useSelector((state) => openModalSelector(state));
  const images = useSelector((state) => imagesSelector(state));
  const error = useSelector((state) => errorSelector(state));

  useEffect(() => {
    if (error && status === "rejected") {
      toast.error(error);

      return;
    }
    if (page === 1) {
      dispatch(setStatus("pending"));
      dispatch(operations.fetch(page));
    }
    if (page > 1) {
      scrollToBottom();
    }
  }, [page, error]);

  const newArr = images.filter(
    (value, index, self) => index === self.findIndex((i) => i.id === value.id)
  );

  const scrollToBottom = () => {
    scrollBy({ top: 630, left: 0, behavior: "smooth" });
  };

  const loadMore = (page) => {
    const newPage = page + 1;
    dispatch(operations.fetch(newPage));
  };

  return (
    <div>
      <HeaderBar />
      {status === "success" && <ImageGallery images={newArr} />}

      {status === "pending" && (
        
        <MoonLoader loading={status==='pending'}  cssOverride={myStyle} size={100}/>
       
      )}
      {status === "success" && <Button loadMore={() => loadMore(page)} />}
      {openModal && <Modal />}
      <ToastContainer
        position={"top-right"}
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
