import { configureStore } from '@reduxjs/toolkit';
import CurrentBlogSlice from './slices/currentBlogSlice';
import currentUserSlice from './slices/currentUserSlice';


export const store = configureStore({
    reducer: {
        currentBlogS : CurrentBlogSlice,
        currentUserS: currentUserSlice
    }
})