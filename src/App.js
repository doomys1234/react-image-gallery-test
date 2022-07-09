import React, {useEffect } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import { useGetImagesQuery } from './redux/imagesSlice';
import { useScrollBy } from "react-use-window-scroll";
import { useSelector, useDispatch } from 'react-redux'
import { incrementPage } from './redux/appSlice';
import { openModalSelector, pageSelector } from './redux/selectors';



import 'react-toastify/dist/ReactToastify.css';
import Headerbar from './components/HeaderBar/HeaderBar.js';
import ImageGallery from './components/ImageGallery/ImageGallery.js';
import Button from './components/Button/Button.js';
import Modal from './components/Modal/Modal.js';

export default function App() {
  
  
  const scrollBy = useScrollBy();
  const dispatch = useDispatch();
  const page = useSelector(state => pageSelector(state))
  const { data, error, isLoading, isSuccess, isFetching, isError } = useGetImagesQuery(page)
  const openModal = useSelector(state => openModalSelector(state));
  
  const showData = data && !isFetching && !isError
 
  
  const newImages = []
   
  useEffect(() => {
    if (isError) {
      toast.error(error.message)
      return
    }
    if (page>1) {
      console.log('eff', data);
      data.forEach(img => {
        newImages.push({id: img.id,
      smallFormatUrl: img.urls.small,
      fullFormatUrl: img.urls.full,
      location: img.user.location,
      author: img.user.username,
      alt: img.alt_description,})
      })

    }
      
  }, [data, isError, page])

 

  const getNormalizedImages = data => {
    if (isLoading) {
      return;
    }
    return data.map(img => {
      return {
      id: img.id,
      smallFormatUrl: img.urls.small,
      fullFormatUrl: img.urls.full,
      location: img.user.location,
      author: img.user.username,
      alt: img.alt_description,
    }
    })
  }
  const images = getNormalizedImages(data)
  

  
  const scrollToBottom = () => {
    scrollBy({ top: 700, left: 0, behavior: "smooth" })
  };

  const loadMore = () => {
    dispatch(incrementPage())
  };

 
  
 

  return (
    <div>
      <Headerbar/>
      {showData && <ImageGallery
        images={images}/>}
       {isLoading && (
        <BallTriangle color="#00BFFF" height={100} width={100} timeout={3000} />
      )}
      {isSuccess && <Button loadMore={loadMore} />}
      {openModal && <Modal />}

      <ToastContainer
        position={'top-right'}
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
