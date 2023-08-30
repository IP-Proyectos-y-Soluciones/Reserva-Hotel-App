import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const urlTravel="http://localhost:3001/travel";

export const getTravel=createAsyncThunk(
    "travel/getTravel",
    async()=>{
        try{
            const resp=await axios.get(urlTravel, {
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
export const postTravel=createAsyncThunk(
    "travel/postTravel",
    async()=>{
        try{
            const resp= await axios.post(urlTravel, {
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
            const resp= await axios.delete(urlTravel,{data:{id:id}}, {
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
            const resp= await axios.put(urlTravel, obj, {
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