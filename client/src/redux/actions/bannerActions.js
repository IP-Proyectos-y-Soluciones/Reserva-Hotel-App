import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL_BANNER = 'https://reservas-hotel.onrender.com/banner/api';


export const getAllBanner=createAsyncThunk(
    "banner/allBanner",
    async()=>{
      try{
        const res = await axios.get(URL_BANNER, {
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

  export const postBanner=createAsyncThunk(
    "banner/newBanner",
    async()=>{
        try{
            const resp = await axios.post(URL_BANNER,{
                headers:{
                    Accept:'application/json',
                },
            });
            return resp.data;
        }catch(error){
            throw error.response.data.message;
        }
    }
  );
