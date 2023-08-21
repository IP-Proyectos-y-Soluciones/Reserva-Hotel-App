import { createSlice } from "@reduxjs/toolkit";
import { getBedroom } from "../actions/bedroomsActions";


const bedroomSlice = createSlice({
    name: "bedrooms",
    initialState: {
      bedrooms: [], 
    },
    reducers: {
      setBedrooms: (state, action) => {
        state.bedrooms = action.payload;
      },
      reserveBedroom: (state, action) => {
        const { id } = action.payload;
        // Marcamos la habitación como reservada
        state.bedrooms = state.bedrooms.map((bedroom) =>
          bedroom.id_h === id ? { ...bedroom, reserved: true } : bedroom
        );
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(getBedroom.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(getBedroom.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.bookings = action.payload;
          state.filteredBookings = action.payload;
        })
        .addCase(getBedroom.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });
  
  export const { setBedrooms, reserveBedroom } = bedroomSlice.actions;
  
  export default bedroomSlice.reducer;
  
  
  
  