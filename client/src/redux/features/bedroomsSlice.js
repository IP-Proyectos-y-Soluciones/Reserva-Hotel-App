import { createSlice } from "@reduxjs/toolkit";
import { getBedroom,getBedroomId } from "../actions/bedroomsActions";


const bedroomSlice = createSlice({
    name: "bedrooms",
    initialState: {
      bedrooms: [],
      bedroomData:null,
      reservedBedrooms:[],
      loading:false,
      error:null,
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
      .addCase(getBedroomId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBedroomId.fulfilled, (state, action) => {
        state.loading = false;
        state.bedroomData = action.payload;
      })
      .addCase(getBedroomId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
        .addCase(getBedroom.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(getBedroom.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.bedrooms = action.payload;
          state.reservedBedrooms = action.payload;
        })
        .addCase(getBedroom.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });
  
  export const { setBedrooms, reserveBedroom } = bedroomSlice.actions;
  
  export default bedroomSlice.reducer;
  
  
  
  