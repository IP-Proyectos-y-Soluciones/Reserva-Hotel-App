import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const urlPlans = "http://localhost:3001/plan";

export const getPlans=createAsyncThunk(
    "plan/getPlan",
    async()=>{
        try{
            const res = await axios.get(urlPlans, {
                headers: {
                  Accept: 'application/json',
                },
              });
<<<<<<< Updated upstream
=======
            console.log(res)
>>>>>>> Stashed changes
            return res.data 
        } catch(error){
          throw new Error (error.response.data.message)
        }
    }
);
export const postPlans = createAsyncThunk(
    "plan/postPlan",
    async(obj)=>{
        try{
            const res = await axios.post(urlPlans, obj, {
                headers: {
                  Accept: 'application/json',
                },
              });
            console.log(res.data)
            return res.data
        } catch(error){
            throw new Error (error.response.data.message)
        }
    }
);
export const putPlans=createAsyncThunk(
    "plan/putPlan",
    async (obj)=>{
        try{
            const res = await axios.put(urlPlans, obj, {
                headers: {
                  Accept: 'application/json',
                },
              });
            return res.data
        }catch(error){
            throw new Error(error.response.data.message)
        }
    }
);
export const deletePlans=createAsyncThunk(
    "plan/deletePlan",
    async(id)=>{
        try{
            const res = await axios.delete(urlPlans,{data:{id:id}}, {
                headers: {
                  Accept: 'application/json',
                },
              });
            return res.data
        }catch(error){
            throw new Error (error.response.data.message)
        }
    }
);