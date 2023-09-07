import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL_SERVICE = "https://reservas-hotel.onrender.com/service";



export const getAllService = createAsyncThunk(
    "service/getService",
    async()=>{
        try{
   const resp=await axios.get(URL_SERVICE , {

                headers: {
                  Accept: 'application/json',
                },
              })
            return resp.data
        }catch(error){
            throw new Error(error.response.data.message)
        }
    }
);
export const postService = createAsyncThunk(
    "service/postService",
    async()=>{
        try{

            const resp= await axios.post(URL_SERVICE , {

                headers: {
                  Accept: 'application/json',
                },
              })
            return resp.data
        }catch(error){
            throw new Error (error.response.data.message)
        }
    }
);
