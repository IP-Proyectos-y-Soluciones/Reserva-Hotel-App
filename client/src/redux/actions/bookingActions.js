import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const URL_BOOKINGS ="https://reservas-hotel.onrender.com/bookings/api";

export const getBookings = createAsyncThunk(
  "bookings/getBookings",
  async(_, { getState }) =>{
    try{
      const { filter } = getState();


      const res = await axios.get(URL_BOOKINGS, { params: filter } , {

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

      const res = await axios.get(URL_BOOKINGS, {
        headers: {
          
          Accept:'application/json',
        },
      });
      console.log(res.data)
      return res.data;
     }catch(error){
      throw error.response.data.message;
     }
  }
);

export const cancelBookings = createAsyncThunk(
  "bookings/cancelBookings",
  async ({ id }) => {
    try {
      const resp = await axios.delete(URL_BOOKINGS, { data: { id: id } }, {
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.status >= 200 && response.status < 300) {
        // İstek başarılı oldu
        const data = response.data;
        const { isCancelled } = data;
        if (!isCancelled) {
          return { isCancelled };
        }
      } else {
        // İstek başarısız oldu
        throw new Error("Failed to cancel booking");
      }
    } catch (error) {
      console.error(error);
      throw new Error(error.response.data.message);
    }
  }
);



export const postBookings = createAsyncThunk(
    "bookings/postBookings",
    async(form,{rejectWithValue})=>{
      try{

     

        const res = await axios.post(URL_BOOKINGS, form, {
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