import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const urlNotification="http://localhost:3001/notifications";

export const getNotifications=createAsyncThunk(
    "notifications/getNotifications",
    async()=>{
        try{
<<<<<<< Updated upstream
            const res = await axios.get(urlNotification, {
=======
            const res = await axios.get(urlNotification , {
>>>>>>> Stashed changes
                headers: {
                  Accept: 'application/json',
                },
              })
            return res.data
        }catch(error){
            throw new Error (error.response.data.message)
        }
    }
);
export const postNotifications=createAsyncThunk(
    "nofications/postNotifications",
    async()=>{
       try{
<<<<<<< Updated upstream
        const res= await axios.post(urlNotification, {
=======
        const res= await axios.post(urlNotification , {
>>>>>>> Stashed changes
            headers: {
              Accept: 'application/json',
            },
          })
        return res.data
       }catch(error){
        throw new Error(error.response.data.message)
       }
    }
);
export const putNotifications=createAsyncThunk(
    "notifications/putNotifications",
    async(obj)=>{
        try{
<<<<<<< Updated upstream
            const res= await axios.put(urlNotification,obj, {
=======
            const res= await axios.put(urlNotification,obj , {
>>>>>>> Stashed changes
                headers: {
                  Accept: 'application/json',
                },
              })
            return res.data
        }catch(error){
            throw new Error(error.response.data.message)
        }
    }
);
export const deleteNotifications=createAsyncThunk(
    "notification/deleteNotifications",
    async(id)=>{
        try{
<<<<<<< Updated upstream
            const res=await axios.delete(urlNotification,{data:{id:id}}, {
=======
            const res=await axios.delete(urlNotification,{data:{id:id}} , {
>>>>>>> Stashed changes
                headers: {
                  Accept: 'application/json',
                },
              })
            return res.data
        }catch(error){
            throw new Error(error.response.data.message)
        }
    }
);
