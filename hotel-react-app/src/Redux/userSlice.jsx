import { createSlice } from "@reduxjs/toolkit";

// The slice reducer actions to handle and store our user information on authentication

export const UserSlice = createSlice({
         name:"UserSlice",
         initialState:{
            user:{},
         },
        reducers:{
            setUser: (state,action)=>{
                state.user = action.payload;
            },
            clearUserData:(state,action)=>{
                state.user = {};
            },
        },
});
export const {setUser, clearUserData} = UserSlice.actions;
export default UserSlice.reducer;