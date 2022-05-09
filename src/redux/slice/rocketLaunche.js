import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  originalItems: [],
  isLoading: true,
};

export const getLauncheItems = createAsyncThunk(
  "rocketLuanch/getLauncheItems",
  async () => {
    try {
      const res = await fetch("https://api.spacexdata.com/v3/launches");
      let data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const rocketSlice = createSlice({
  name: "rocket",
  initialState,
  reducers: {
    filterData: (stateObj, action) => {
      const state = stateObj;
      state.filters = { ...action.payload };
      state.items = state.originalItems;
    },
    extraReducers: (builder) => {
      builder
        .addCase(getLauncheItems.pending, (state) => {
          // pending... state
        })
        .addCase(getLauncheItems.fulfilled, (stateObj, action) => {
          const state = stateObj;
          state.items = action.payload;
          state.originalItems = action.payload;
        });
    },
  },
});

export const { filterData } = rocketSlice.actions;
export default rocketSlice.reducer;
