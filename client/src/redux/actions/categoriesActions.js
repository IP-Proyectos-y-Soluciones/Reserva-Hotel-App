import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const urlCateg = "http://localhost:3001/categories";

export const getAllCategories = createAsyncThunk(
    "categories/allCategories",
    async()=>{
        try {
            const resp = await axios.get(urlCateg,{
                headers: {
                    Accept:'application/json',
                  },
                });
                return resp.data;
               }catch(error){
                throw error.response.data.message;
               }
            }
        );
        
 export const postCategories = createAsyncThunk(
     "categories/postCategories",
     async()=>{
         try {
            const resp = await axios.post(urlCateg, {
                headers: {
                    Accept:'application/json',
                  },
                });
                return resp.data;
               }catch(error){
                throw error.response.data.message;
               }
            }
        );
                
