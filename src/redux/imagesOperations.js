import axios from "axios";
import { incrementPage, setNewImages, setStatus, setError } from "./appSlice";

const ACCESS_KEY =
  "ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9";

axios.defaults.baseURL = `https://api.unsplash.com/photos/`;

const fetch = (page) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `?page=${page}&per_page=8&client_id=${ACCESS_KEY}`,
      page
    );
    const arrOfImages = [];
    data.forEach((img) => {
      arrOfImages.push({
        id: img.id,
        smallFormatUrl: img.urls.small,
        fullFormatUrl: img.urls.full,
        location: img.user.location,
        author: img.user.username,
      });
    });
    if (page === 1) {
      dispatch(setNewImages(arrOfImages));
    }
    if (page > 1) {
      dispatch(incrementPage(arrOfImages));
    }
    return;
  } catch (error) {
    dispatch(setStatus("rejected"));
    dispatch(setError(error.message));
  }
};

const operations = {
  fetch,
};
export default operations;
