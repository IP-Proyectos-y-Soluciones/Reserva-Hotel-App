import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL_TESTIMONIALS = "https://reservas-hotel.onrender.com/testimonials/api";

export const getAllTestimonials = createAsyncThunk(
    "testimonials/getTestimonials",
    async()=>{
        try{

   const resp=await axios.get(URL_TESTIMONIALS , {

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
export const postTestimonials = createAsyncThunk(
    "testimonials/postTestimonials",
    async()=>{
        try{

            const resp= await axios.post(URL_TESTIMONIALS , {

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
export const deleteTestimonials = createAsyncThunk(
    "testimonials/deleteTestimonials",
    async(id)=>{
        try{



            const resp= await axios.delete(URL_TESTIMONIALS,{data:{id:id}} , {

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
export const putTestimonials = createAsyncThunk(
    "testimonials/putTestimonials",
    async(obj)=>{
        try{


            const resp= await axios.put(URL_TESTIMONIALS, obj , {

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