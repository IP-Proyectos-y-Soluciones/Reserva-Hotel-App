import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const urlBookings ="http://localhost:3001/bookings";

export const getBookings = createAsyncThunk(
  "bookings/getBookings",
  async(_, { getState }) =>{
    try{
      const { filter } = getState();
<<<<<<< Updated upstream
      const res = await axios.get(urlBookings, { params: filter }, {
=======
      const res = await axios.get(urlBookings, { params: filter } , {
>>>>>>> Stashed changes
        headers: {
          Accept: 'application/json',
        },
      });
      return res.data;
    } catch (error){
      throw error.response.data.message;
    }
  }
);

export const postBookings = createAsyncThunk(
    "bookings/postBookings",
    async(form,{rejectWithValue})=>{
      try{
<<<<<<< Updated upstream
        const res= await axios.post(urlBookings,form, {
=======
        const res= await axios.post(urlBookings,form , {
>>>>>>> Stashed changes
          headers: {
            Accept: 'application/json',
          },
        });
        console.log (res.data);
        return res.data;
      } catch(error){
        return rejectWithValue(error.response.data)
      }
    }
);