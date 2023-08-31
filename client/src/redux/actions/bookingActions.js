import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const urlBookings ="http://localhost:3001/bookings";

export const getBookings = createAsyncThunk(
  "bookings/getBookings",
  async(_, { getState }) =>{
    try{
      const { filter } = getState();


      const res = await axios.get(urlBookings, { params: filter } , {

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
export const getAllBookings=createAsyncThunk(
  "bookings/allBookings",
  async()=>{
    try{
      const res = await axios.get(urlBookings, {
        headers: {
          Accept:'application/json',
        },
      });
      return res.data;
     }catch(error){
      throw error.response.data.message;
     }
  }
);

export const postBookings = createAsyncThunk(
    "bookings/postBookings",
    async(form,{rejectWithValue})=>{
      try{

     

        const res= await axios.post(urlBookings,form , {

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