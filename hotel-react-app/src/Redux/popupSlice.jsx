import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    isPopupVisible: false,
};

const popupSlice = createSlice({
    name:'popup',
    initialState,
    reducers:{
        showpPopup
    }
})