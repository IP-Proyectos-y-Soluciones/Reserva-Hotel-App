import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const urlUsers= "http://localhost:3001/users";
const urlUsersPost ="http://localhost:3001/users/verify";
const urlLoginUser="http://localhost:3001/users/login";

export const getUsers=createAsyncThunk(
    "users/getUsers",
    async()=>{
        try{
            const res = await axios.get(urlUsers);
            return res.data
        
    } catch(error){
     throw new Error(error.response.data.message)
    }
   }  
);
export const createUsersVerify = createAsyncThunk(
    "users/createUsersVerify",
    async()=>{
        try{
            const res = await axios.post(urlUsersPost);
            return res.data
        }catch(error){
            throw new Error(error.response.data.message)
        }
    }
);
export const loginUser=createAsyncThunk(
    "users/loginUser",
    async()=>{
        try {
            const res = await axios.post(urlLoginUser);
            console.log(res.data)
            return res.data
        } catch (error) {
            throw new Error(error.response.data.message)
        }
    }
);
export const createUsers =createAsyncThunk(
    "users/createUsers",
    async(payload)=>{
        try{
            const res= await axios.post(urlUsers, payload);
            return res.data
        }catch(error){
            throw new Error(error.response.data.message)
        }
    }
);
export const putUser = createAsyncThunk(
    "users/putUsers",
    async(obj)=>{
        try{
            const res= await axios.put(urlUsers, obj);
            return res.data
        } catch(error){
            throw new Error(error.response.data.message)
        }
    }
);

export const updatedsUser=createAsyncThunk(
    "users/updatedsUser",
    async(id) =>{
        try{
            const res= await axios.get(urlUsers,{data:{id:id}})
            return res.data
        }catch(error){
            throw new Error(error.response.data.message)
        }
    }
);


