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
            store.value.userData = action.payload
        },
        storeToken(store, action){
            store.value.token = action.payload
        }
    }
})



export const {storeUserData, storeToken} = CurrentUserSlice.actions;
export default CurrentUserSlice.reducer;