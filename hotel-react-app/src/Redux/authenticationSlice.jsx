import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from '../Config/firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';


// Initial state
const initialState = {
  user: null,
  status: 'idle',
  error: null,
};

// Async thunk for sign-up
export const signUpUser = createAsyncThunk(
  'auth/signUpUser',
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
     
      // Add function: create await user/
      
      // Update user profile with name
      await updateProfile(userCredential.user, {
        displayName: name,
      });

      return userCredential.user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for sign-in
export const signInUser = createAsyncThunk(
  'auth/signInUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // Sign in with email and password
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Create the slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signOutUser: (state) => {
      state.user = null;
      state.status = 'idle';
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Sign up user
      .addCase(signUpUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
        state.error = null;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      
      // Sign in user
      .addCase(signInUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
        state.error = null;
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

// Export the signOut action for logging out
export const { signOutUser } = authSlice.actions;

export default authSlice.reducer;

