import { createSlice } from '@reduxjs/toolkit';

const popupSlice = createSlice({
  name: 'popup',
  initialState: {
    isVisible: false,
    cardData: null, // Initialize with null or an empty object if needed
  },
  reducers: {
    openPopup: (state, action) => {
      state.isVisible = true;
      state.cardData = action.payload; // Store the card data
    },
    closePopup: (state) => {
      state.isVisible = false;
      state.cardData = null; // Clear the card data
    },
  },
});

export const { openPopup, closePopup } = popupSlice.actions;
export default popupSlice.reducer;
