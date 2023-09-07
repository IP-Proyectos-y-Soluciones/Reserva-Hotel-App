import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL_TRAVEL="https://reservas-hotel.onrender.com/travel";

export const getTravel=createAsyncThunk(
    "travel/getTravel",
    async()=>{
        try{

   const resp=await axios.get(URL_TRAVEL , {

                headers: {
                  Accept: 'application/json',
                },
              })
            return resp.dataz
        }catch(error){
            throw new Error(error.response.data.message)
        }
    }
);
export const postTravel=createAsyncThunk(
    "travel/postTravel",
    async()=>{
        try{

            const resp= await axios.post(URL_TRAVEL , {

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
export const deleteTravel=createAsyncThunk(
    "travel/deleteTravel",
    async(id)=>{
        try{



            const resp= await axios.delete(URL_TRAVEL,{data:{id:id}} , {

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
export const putTravel=createAsyncThunk(
    "travel/putTravel",
    async(obj)=>{
        try{


            const resp= await axios.put(URL_TRAVEL, obj , {

                headers: {
                  Accept: 'application/json',
                },
              })
            return resp.data
        } catch(error){
            throw new Error(error.response.data.message)
        }
    }
);
