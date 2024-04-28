import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUserData: (state, action) => {
      const { payload } = action;

      return { ...state, token: payload.value };
    },
  },
});

export const { setUserData } = userSlice.actions;

export default userSlice.reducer;
