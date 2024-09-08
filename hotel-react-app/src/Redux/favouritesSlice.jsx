import { createSlice } from '@reduxjs/toolkit';

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: {
    rooms: [], // Array to store liked rooms
  },
  reducers: {
    addToFavourites: (state, action) => {
      const room = action.payload;
      if (!state.rooms.find(r => r.id === room.id)) {
        state.rooms.push(room);
      }
    },
    removeFromFavourites: (state, action) => {
      const roomId = action.payload.id;
      state.rooms = state.rooms.filter(room => room.id !== roomId);
    },
  },
});

export const { addToFavourites, removeFromFavourites } = favouritesSlice.actions;

export default favouritesSlice.reducer;
