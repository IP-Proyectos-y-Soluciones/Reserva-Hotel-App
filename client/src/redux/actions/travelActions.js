import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const urlTravel="http://localhost:3001/travel";

export const getTravel=createAsyncThunk(
    "travel/getTravel",
    async()=>{
        try{
<<<<<<< Updated upstream
            const resp=await axios.get(urlTravel, {
=======
            const resp=await axios.get(urlTravel , {
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
            const resp= await axios.post(urlTravel, {
=======
            const resp= await axios.post(urlTravel , {
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
            const resp= await axios.delete(urlTravel,{data:{id:id}}, {
=======
            const resp= await axios.delete(urlTravel,{data:{id:id}} , {
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
            const resp= await axios.put(urlTravel, obj, {
=======
            const resp= await axios.put(urlTravel, obj , {
>>>>>>> Stashed changes
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