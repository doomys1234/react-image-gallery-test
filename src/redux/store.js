import { configureStore } from '@reduxjs/toolkit'
import appReducer from './appSlice'
import {imagesApi} from './imagesSlice'

export const store = configureStore({
    reducer: {
    app: appReducer,
    [imagesApi.reducerPath]: imagesApi.reducer,
    
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(),imagesApi.middleware ],
})
