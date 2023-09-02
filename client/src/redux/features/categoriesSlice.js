import { createSlice } from "@reduxjs/toolkit";
import { getAllCategories, postCategories } from "./categoriesActions";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [], 
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(getAllCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(postCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postCategories.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(postCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default categoriesSlice.reducer;