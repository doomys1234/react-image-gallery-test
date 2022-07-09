export const modalImageSelector = state => {
  return state.app.modalImage;
};
export const openModalSelector = state => {
    return state.app.openModal
}
export const statusSelector = state => {
    return state.images.status
}
export const pageSelector = state => {
    return state.app.page
}
export const imagesSelector = state => {
    return state.images.images
}

