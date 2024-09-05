import { createSlice } from "@reduxjs/toolkit";

// The initial state of the drawer on the home page for users
const drawerSlice = createSlice({
    name: 'drawer',
    initialState:{
        isOpen: false, 
    },
    // Reducer for managing the state of the slice
  reducers:{
    openDrawer:(state)=>{
        state.isOpen = true;
    },
    closeDrawer:(state)=>{
        state.isOpen = false;
      },
  }, 
  
});
// Exporting the actions and the reducer
export const {openDrawer, closeDrawer} = drawerSlice.actions;
export default drawerSlice.reducer;