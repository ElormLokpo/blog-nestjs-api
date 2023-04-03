import { configureStore } from '@reduxjs/toolkit';
import CurrentBlogSlice from './slices/currentBlogSlice';


export const store = configureStore({
    reducer: {
        currentBlogS : CurrentBlogSlice
    }
})