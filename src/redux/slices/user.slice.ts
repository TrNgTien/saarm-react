import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    getUserData: (state, action) => {
      const { payload } = action;

      return { ...state, token: payload.value };
    },
  },
});

export const { getUserData } = userSlice.actions;

export default userSlice.reducer;
