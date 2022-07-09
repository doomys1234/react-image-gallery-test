import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    page: 1,
    modalImage: '',
    openModal: false,
    images: []
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementPage: (state, action) => {
          state.page += 1
      },
      setModalImage: (state, action) => {
          state.modalImage = action.payload
          state.openModal= !state.openModal
      },
      toggleModal: (state) => {
          state.openModal = !state.openModal
      },
      setStatus: (state, action) => {
          state.status = action.payload
      },
    setImages: (state, action) => {
      console.log(action.payload);
        state.images = action.payload
    //  state.images = action.payload.map((img) => {
    //   return {
    //     id: img.id,
    //     smallFormatUrl: img.urls.small,
    //     fullFormatUrl: img.urls.full,
    //     location: img.user.location,
    //     author: img.user.username,
    //     alt: img.alt_description,
    //   };
    // });
      }
    
  },
})

//

// Action creators are generated for each case reducer function
export const { incrementPage, setModalImage, toggleModal, setStatus, setImages } = counterSlice.actions

export default counterSlice.reducer