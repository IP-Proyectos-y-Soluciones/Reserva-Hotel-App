import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const urlPlans = "http://localhost:3001/plan";

export const getPlans=createAsyncThunk(
    "plan/getPlan",
    async()=>{
        try{
            const res = await axios.get(urlPlans);
            return res.data 
        } catch(errror){

        }
    }
)