import { createSlice } from '@reduxjs/toolkit';

interface initialStateI {
    value: {
        currentBlog: any
    }
}

const initialState: initialStateI = {
    value:{
        currentBlog: null
    }
}

const CurrentBlogSlice = createSlice({
    name: 'CurrentBlog',
    initialState,
    reducers:{
        storeCurrentBlog(store:any, action:any){
            store.value.currentBlog = action.payload;
        }
    }
});


export const {storeCurrentBlog} = CurrentBlogSlice.actions;
export default CurrentBlogSlice.reducer;

