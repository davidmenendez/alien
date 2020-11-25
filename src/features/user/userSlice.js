import {
  createSlice,
  createAsyncThunk,
} from '@reduxjs/toolkit';

const initialState = {
  loggedIn: false,
  user: {},
  error: null,
  status: 'idle',
};

export const fetchUser = createAsyncThunk('user/fetchUser', async data => {
  const token = localStorage.getItem('alienToken');
  const response = await fetch('/api/user', {
    headers: {
      'authorization': `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    if (token) localStorage.removeItem('alienToken');
    return Promise.reject(response.statusText);
  }
  const json = await response.json();
  return json.data;
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.loggedIn = true;
    },
    logout: (state, action) => {
      state.loggedIn = false;
    },
  },
  extraReducers: {
    [fetchUser.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.status = 'succeeded';
      state.loggedIn = true;
      state.error = null;
    },
    [fetchUser.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
