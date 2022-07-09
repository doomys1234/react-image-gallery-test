import React, { useEffect } from "react";
import { BallTriangle } from "react-loader-spinner";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { useGetImagesQuery } from "./redux/imagesSlice";
import { useScrollBy } from "react-use-window-scroll";
import { useSelector, useDispatch } from "react-redux";
import { incrementPage, setImages } from "./redux/appSlice";
import { openModalSelector, pageSelector } from "./redux/selectors";


import "react-toastify/dist/ReactToastify.css";
import Headerbar from "./components/HeaderBar/HeaderBar.js";
import ImageGallery from "./components/ImageGallery/ImageGallery.js";
import Button from "./components/Button/Button.js";
import Modal from "./components/Modal/Modal.js";

export default function App() {
  const scrollBy = useScrollBy();
  const dispatch = useDispatch();
  const page = useSelector((state) => pageSelector(state));
  const { data, error, isLoading, isSuccess, isFetching, isError } =
    useGetImagesQuery(page);
  const openModal = useSelector((state) => openModalSelector(state));
  const imagesGal = useSelector((state) => state.app.images);

  const showData = data && !isFetching && !isError;

  useEffect(() => {
    if (data) {
      dispatch(setImages(data));
    }

    if (isError) {
      toast.error(error.message);
      return;
    }
  }, [data, isError, page]);


  const scrollToBottom = () => {
    scrollBy({ top: 700, left: 0, behavior: "smooth" });
  };

  const loadMore = () => {
    dispatch(incrementPage());
  };

  // const getRefreshedImages = (newImages) => {
  //   if (isLoading) {
  //     return
  //   }
  //   thirdArr = [...images, ...newImages]
  //   return thirdArr
  // }

  // const refreshedImages = getRefreshedImages(newImages)
  // console.log('refreshedImages', refreshedImages);

  return (
    <div>
      <Headerbar />
      {/* {showData && <ImageGallery images={imagesGal} />}
      {isLoading && (
        <BallTriangle color="#00BFFF" height={100} width={100} timeout={3000} />
      )}
      {isSuccess && <Button loadMore={loadMore} />}
      {openModal && <Modal />} */}

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
