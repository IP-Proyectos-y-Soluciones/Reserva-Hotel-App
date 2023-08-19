import { createSlice } from "@reduxjs/toolkit";
//import { getBedroom } from "../actions/bedroomsActions";


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
  });
  
  export const { setBedrooms, reserveBedroom } = bedroomSlice.actions;
  
  export default bedroomSlice.reducer;
  
  
  
  