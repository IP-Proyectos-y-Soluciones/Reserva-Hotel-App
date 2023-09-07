import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const urlService = "http://localhost:3001/service";



export const getAllService = createAsyncThunk(
    "service/getService",
    async()=>{
        try{
   const resp=await axios.get(urlService , {

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

            const resp= await axios.post(urlService , {

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