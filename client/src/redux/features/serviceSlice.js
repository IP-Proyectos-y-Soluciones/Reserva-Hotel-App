import { createSlice } from "@reduxjs/toolkit";
import { getAllService } from "../actions/serviceActions";


const initialState = {
  service: [],
  loading: false,
  error: null,
};

const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllService.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllService.fulfilled, (state, action) => {
        state.loading = false;
        state.service = action.payload;
        state.error = null;
      })
      .addCase(getAllService.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    },

});
export default serviceSlice.reducer;