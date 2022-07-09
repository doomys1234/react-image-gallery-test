// import axios from "axios";
// import { createAsyncThunk } from "@reduxjs/toolkit";

// const ACCES_KEY = 'ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9';

// axios.defaults.baseURL = `https://api.unsplash.com/photos/`



// const fetch = createAsyncThunk('', async (page) => {
//     try {
//         const { data } = await axios.get(`?page=${1}&per_page=12&client_id=${ACCES_KEY}`, page);
//         const arrOfImages = []
//       data.forEach(img => {
//         arrOfImages.push({
//           id: img.id,
//           smallFormatUrl: img.urls.small,
//           fullFormatUrl: img.urls.full,
//           location: img.user.location,
//           author: img.user.username,
//           alt: img.alt_description,
//         })
//       })
        
//         return arrOfImages;
//     } catch (error) {
//         return error
//     };
// });




const operations = {
    fetch,
    
}
export default operations;