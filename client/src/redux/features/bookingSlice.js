import { createSlice } from '@reduxjs/toolkit';
import { getBookings,getAllBookings,deleteBookings } from '../actions/bookingActions';

const bookingsSlice = createSlice({
  name: 'bookings',
  initialState: {
    bookings: [],
    allBookings:[],
    searchBooking:[],
    loading:false,
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
    searchBooking:(state,action)=>{
      const {startDate, endDate}= action.payload;
      const filterBook=state.bookings.filter(booking=>{
        const departureDate= new Date(booking.departure_date);
        const admissionDate= new Date(booking.admission_date);
        return(
          departureDate >= startDate && departureDate <= endDate && admissionDate >= startDate && admissionDate <= endDate
        );
      });
      state.searchBooking = filterBook;
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(getAllBookings.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(getAllBookings.fulfilled, (state, action) => {
      state.loading = false;
      state.allBookings = action.payload;
    })
    .addCase(getAllBookings.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })
    .addCase(deleteBookings.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(deleteBookings.fulfilled, (state, action) => {
      state.loading = false;
      state.bookings = state.bookings.filter((booking) => booking.id !== action.payload.id);
    })
    .addCase(deleteBookings.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })
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

export const { setFilters, clearFilters, searchBooking } = bookingsSlice.actions;
export default bookingsSlice.reducer;