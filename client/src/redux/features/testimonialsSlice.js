import { createSlice } from "@reduxjs/toolkit";
import { getAllTestimonials } from "../actions/testimonialsActions";

const initialState = {
  testimonials: [],
  loading: false,
  error: null,
};

const testimonialsSlice = createSlice({
  name: "testimonials",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllTestimonials.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllTestimonials.fulfilled, (state, action) => {
        state.loading = false;
        state.testimonials = action.payload;
        state.error = null;
      })
      .addCase(getAllTestimonials.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    },

});
export default testimonialsSlice.reducer;