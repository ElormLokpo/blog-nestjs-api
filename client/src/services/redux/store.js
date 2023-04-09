import { configureStore } from '@reduxjs/toolkit';
import CurrentBlogSlice from './slices/currentBlogSlice';
import currentUserSlice from './slices/currentUserSlice';
import {combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    currentBlogS : CurrentBlogSlice,
    currentUserS: currentUserSlice
});

const config = {
    key: 'root',
    storage
};


const persistedReducer = persistReducer(config, rootReducer);



export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

export const persistedStore = persistStore(store);