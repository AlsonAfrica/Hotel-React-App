import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import DrawerSlice from './DrawerSlice';
import UserSlice from './userSlice';
import authenticationSlice from './authenticationSlice';
import popupformSlice from './popupformSlice';
import favouriteSlice from './favouritesSlice';

// Combine all the reducers
const rootReducer = combineReducers({
  drawer: DrawerSlice,
  user: UserSlice,
  auth: authenticationSlice,
  popup: popupformSlice,
  favourite:favouriteSlice
});

// Configure the store using the rootReducer
const store = configureStore({
  reducer: rootReducer,
});

export default store;