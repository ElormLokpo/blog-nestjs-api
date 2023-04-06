import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value:{
        userData: null,
        token: null
    }
}


const CurrentUserSlice = createSlice({
    name: 'CurrentUserSlice',
    initialState,
    reducers:{
        storeUserData(store, action){
            store.userData = action.payload
        },
        storeToken(store, action){
            store.token = action.payload
        }
    }
})



export const {storeUserData, storeToken} = CurrentUserSlice.actions;
export default CurrentUserSlice.reducer;