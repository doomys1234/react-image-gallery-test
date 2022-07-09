import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
  modalImage: "",
  openModal: false,
  error: null,
  images: [],
  status: "idle",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementPage: (state, action) => {
      state.page += 1;
      state.images = [...state.images, ...action.payload];
      state.status = "success";
    },
    setModalImage: (state, action) => {
      state.modalImage = action.payload;
      state.openModal = !state.openModal;
    },
    toggleModal: (state) => {
      state.openModal = !state.openModal;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setNewImages: (state, action) => {
      state.images = action.payload;
      state.status = "success";
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  incrementPage,
  setModalImage,
  toggleModal,
  setStatus,
  setNewImages,
  setError,
} = counterSlice.actions;

export default counterSlice.reducer;
