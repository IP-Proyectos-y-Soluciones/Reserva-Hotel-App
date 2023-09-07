import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL_CATEG = "https://reservas-hotel.onrender.com/categories";

export const getAllCategories = createAsyncThunk(
    "categories/allCategories",
    async()=>{
        try {
            const resp = await axios.get(URL_CATEG,{
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
            const resp = await axios.post(URL_CATEG, {
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
                
