import { configureStore } from '@reduxjs/toolkit'
import productReducer from './slices/poductSlice';
export const store = configureStore({
    reducer: {
        products: productReducer,
    },
})