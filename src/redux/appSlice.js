import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    page: 1,
    modalImage: '',
    openModal: false,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementPage: (state) => {
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
      }
    
  },
})

// Action creators are generated for each case reducer function
export const { incrementPage, setModalImage, toggleModal, setStatus } = counterSlice.actions

export default counterSlice.reducer