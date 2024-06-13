import { createSlice } from '@reduxjs/toolkit';
import set from 'lodash/set';

const initialState = {
  room: {},
  isSubmitWater: false,
};

export const roomSlice = createSlice({
  name: 'room',
  initialState: initialState,
  reducers: {
    setRoomData: (state, action) => {
      const { payload } = action;
      return set(state, 'room', payload);
    },

    setIsSubmitWater: (state, action) => {
      const { payload } = action;
      return set(state, 'isSubmitWater', payload);
    },

    resetRoomState: () => {
      return { ...initialState };
    },
  },
});

export const { setRoomData, setIsSubmitWater, resetRoomState } =
  roomSlice.actions;

export default roomSlice.reducer;
