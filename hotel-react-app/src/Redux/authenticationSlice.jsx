import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from '../Config/firebaseconfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, updateEmail, updatePassword } from 'firebase/auth';

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
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name });
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
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for updating user profile
export const updateUserProfile = createAsyncThunk(
  'auth/updateUserProfile',
  async ({ displayName, photoURL }, { rejectWithValue }) => {
    try {
      const user = auth.currentUser;
      if (user) {
        await updateProfile(user, { displayName, photoURL });
        return { ...user, displayName, photoURL };
      }
      throw new Error('No user is signed in');
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for updating email
export const updateUserEmail = createAsyncThunk(
  'auth/updateUserEmail',
  async ({ newEmail, password }, { rejectWithValue }) => {
    try {
      const user = auth.currentUser;
      if (user) {
        await signInWithEmailAndPassword(auth, user.email, password); // Re-authenticate to update email
        await updateEmail(user, newEmail);
        return { ...user, email: newEmail };
      }
      throw new Error('No user is signed in');
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for updating password
export const updateUserPassword = createAsyncThunk(
  'auth/updateUserPassword',
  async ({ newPassword, oldPassword }, { rejectWithValue }) => {
    try {
      const user = auth.currentUser;
      if (user) {
        await signInWithEmailAndPassword(auth, user.email, oldPassword); // Re-authenticate to update password
        await updatePassword(user, newPassword);
        return { ...user };
      }
      throw new Error('No user is signed in');
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
      })
      .addCase(updateUserProfile.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
        state.error = null;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(updateUserEmail.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateUserEmail.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
        state.error = null;
      })
      .addCase(updateUserEmail.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(updateUserPassword.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateUserPassword.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
        state.error = null;
      })
      .addCase(updateUserPassword.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

// Export the signOut action for logging out
export const { signOutUser } = authSlice.actions;

export default authSlice.reducer;

