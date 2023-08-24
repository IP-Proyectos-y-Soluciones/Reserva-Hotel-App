import {createSlice} from "@reduxjs/toolkit";
import { getNotifications } from "../actions/notificationActions";
import { postNotifications } from "../actions/notificationActions";

const initialState={
    notifications:[],
    loading:false,
    error:null,
};

const notificationSlice=createSlice({
    name:"notification",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getNotifications.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(getNotifications.fulfilled,(state,action)=>{
            state.loading=false;
            state.error=null;
            state.notifications=action.payload;
        })
        .addCase(getNotifications.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.error.message;
        })
        .addCase(postNotifications.fulfilled,(state,action)=>{
            state.loading=false;
            state.notifications=action.payload;
        });
    },
});

export default notificationSlice.reducer;
