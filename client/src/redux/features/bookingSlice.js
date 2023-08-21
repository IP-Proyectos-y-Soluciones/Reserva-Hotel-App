import { createSlice } from '@reduxjs/toolkit';
import { getBookings } from '../actions/bookingActions';

const bookingsSlice = createSlice({
  name: 'bookings',
  initialState: {
    bookings: [],
    status: 'idle',
    error: null,
    filters: {
      minPrice: null,
      maxPrice: null,
    },
  },
  reducers: {
    setFilters: (state, action) => {
      state.filters = action.payload;
      state.filteredBookings = state.bookings.filter(booking => {
        const price = parseFloat(booking.payment_reservation);
        return (!state.filters.minPrice || price >= state.filters.minPrice) && (!state.filters.maxPrice || price <= state.filters.maxPrice);
      });
    },
    clearFilters: (state) => {
      state.filters = {
        minPrice: null,
        maxPrice: null,
      };
      state.filteredBookings = state.bookings;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBookings.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getBookings.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.bookings = action.payload;
        state.filteredBookings = action.payload;
      })
      .addCase(getBookings.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setFilters, clearFilters } = bookingsSlice.actions;
export const bookingsReducer = bookingsSlice.reducer;