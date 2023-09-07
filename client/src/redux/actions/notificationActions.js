import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL_NOTIFICATION="https://reservas-hotel.onrender.com/notifications";

export const getNotifications=createAsyncThunk(
    "notifications/getNotifications",
    async()=>{
        try{


            const res = await axios.get(URL_NOTIFICATION , {

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

        const res= await axios.post(URL_NOTIFICATION , {
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

      
            const res= await axios.put(URL_NOTIFICATION,obj , {

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


            const res=await axios.delete(URL_NOTIFICATION,{data:{id:id}} , {

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
