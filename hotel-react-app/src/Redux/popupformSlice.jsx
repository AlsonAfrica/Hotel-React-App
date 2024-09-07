import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: false,
    roomDetails: null,
};

const popupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        openPopup: (state, action) => {
            state.isOpen = true;
            state.roomDetails = action.payload;
        },
        closePopup: (state) => {
            state.isOpen = false;
            state.roomDetails = null;
        },
    },
});

export const { openPopup, closePopup } = popupSlice.actions;
export default popupSlice.reducer;
