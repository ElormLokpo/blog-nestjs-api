import { createSlice } from '@reduxjs/toolkit';


type UserType = {
    main_heading: string,
    description: string,
    main_img: string,
    _id: any
};

interface initialStateI {
    value: {
        currentBlog: any,
        clickBlog: any
    }
}

const initialState: initialStateI = {
    value:{
        currentBlog: null,
        clickBlog: null
        }
    }


const CurrentBlogSlice = createSlice({
    name: 'CurrentBlog',
    initialState,
    reducers:{
        storeCurrentBlog(store:any, action:any){
            store.value.currentBlog = action.payload;
        },
        clickCurrentBlog(store:any, action:any){
            store.value.clickBlog = action.payload;
        }
    }
});


export const {storeCurrentBlog, clickCurrentBlog} = CurrentBlogSlice.actions;
export default CurrentBlogSlice.reducer;

