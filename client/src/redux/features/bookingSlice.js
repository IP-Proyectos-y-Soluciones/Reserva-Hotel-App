import { createSlice } from "@reduxjs/toolkit";
import { getBookings, postBookings } from "../actions/bookingActions";


const bookingsSlice = createSlice({
    name: 'bookings',
    initialState: {
      bookings: [],
      bookingsCopy:[],
      bookingByTime:[], 
      status: 'idle', 
      error: null, 
    },
    reducers: {
        filterBookings: (state, action) => {
            state.bookings = state.bookings.filter(booking => booking.isFull !== true);
          }
      },
    extraReducers: (builder) => {
      builder
      .addCase(getBookings.pending, (state) => {
        state.status = 'loading'; 
      })
      .addCase(getBookings.fulfilled, (state, action) => {
        state.status = 'succeeded'; 
        state.bookings = action.payload; 
      })
      .addCase(getBookings.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message; 
      })
        .addCase(postBookings.pending, (state) => {
          state.status = 'loading'; 
        })
        .addCase(postBookings.fulfilled, (state, action) => {
          state.status = 'succeeded'; 
          state.bookings.push(action.payload); 
        })
        .addCase(postBookings.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message; 
        });
    },
  });
  export const {filterBookings}= bookingsSlice.actions
  export default bookingsSlice.reducer;