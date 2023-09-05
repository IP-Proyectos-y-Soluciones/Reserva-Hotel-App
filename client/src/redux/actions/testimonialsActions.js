import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const urlTestimonials = "http://localhost:3001/testimonials";

export const getAllTestimonials = createAsyncThunk(
    "testimonials/getTestimonials",
    async()=>{
        try{

   const resp=await axios.get(urlTestimonials , {

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

            const resp= await axios.post(urlTestimonials , {

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



            const resp= await axios.delete(urlTestimonials,{data:{id:id}} , {

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


            const resp= await axios.put(urlTestimonials, obj , {

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