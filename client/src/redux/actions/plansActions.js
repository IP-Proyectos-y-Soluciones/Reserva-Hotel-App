import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL_PLANS = "/api/plan";

export const getPlans=createAsyncThunk(
    "plan/getPlan",
    async()=>{
        try{
            const res = await axios.get(URL_PLANS , {
                headers: {
                  Accept: 'application/json',
                },
              });

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
            const res = await axios.post(URL_PLANS, obj, {
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
            const res = await axios.put(URL_PLANS, obj, {
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
            const res = await axios.delete(URL_PLANS,{data:{id:id}}, {
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
