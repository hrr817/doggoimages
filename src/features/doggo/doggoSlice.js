import { createSlice } from "@reduxjs/toolkit";

const doggoSlice = createSlice({
  name: "doggos",
  initialState: [],
  reducers: {
    fetchDoggoImages: (state, action) => {},
    fetchDoggoImageSucceed: (state, { payload }) => {
      state.push(payload);
    },
  },
});

export const { fetchDoggoImages, fetchDoggoImageSucceed } = doggoSlice.actions;

export const selectDoggos = (state) => state.doggos;

export default doggoSlice.reducer;
