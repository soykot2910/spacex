import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  isLoading: true,
};

export const getlancheItems = createAsyncThunk(
  "lanches/getlancheItems",
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

export const lancheSlice = createSlice({
  name: "lanches",
  initialState,
  reducers: {
    launchSuccess: (state) => {
      state.items = state.items.filter((item) => item.launch_success == true);
    },
    launchFalse: (state) => {
      state.items = state.items.filter((item) => item.launch_success == false);
    },
    upcomming: (state) => {
      state.items = state.items.filter((item) => item.upcomming == true);
    },
  },
  extraReducers: {
    [getlancheItems.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getlancheItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    },
    [getlancheItems.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const { launchSuccess, launchFalse, upcomming } = lancheSlice.actions;
export default lancheSlice.reducer;
