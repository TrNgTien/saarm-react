import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    resetUserData: () => {
      return { ...initialState };
    },

    setUserData: (state, action) => {
      const { payload } = action;

      return { ...state, ...payload };
    },
  },
});

export const { setUserData, resetUserData } = userSlice.actions;

export default userSlice.reducer;
