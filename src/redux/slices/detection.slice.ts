import { createSlice } from '@reduxjs/toolkit';
import set from 'lodash/set';

const initialState = {
  isFailDetect: false,
};

export const detectionSlice = createSlice({
  name: 'detection',
  initialState: initialState,
  reducers: {
    setIsFailDetection: (state, action) => {
      const { payload } = action;
      console.log('payload', payload);
      return set(state, 'isFailDetect', payload);
    },
    resetDetection: () => {
      return { ...initialState };
    },
  },
});

export const { setIsFailDetection, resetDetection } = detectionSlice.actions;

export default detectionSlice.reducer;
