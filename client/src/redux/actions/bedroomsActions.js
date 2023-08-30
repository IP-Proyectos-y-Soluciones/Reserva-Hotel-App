import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const urlBedroom = "http://localhost:3001/bedroom";

<<<<<<< HEAD
export const getBedroom= createAsyncThunk(
    "bedroom/getBedroom",
    async () =>{
        try{
            console.log(resp)
            const resp = await axios.get(urlBedroom);
            return resp.data
        }catch(error){
            throw new Error(error.response.data.message)
        }
=======
export const getBedroom = createAsyncThunk(
  "bedroom/getBedroom",
  async () => {
    try {
      const resp = await axios.get(urlBedroom, {
        headers: {
          Accept: 'application/json',
        },
      });
      return resp.data;
    } catch (error) {
      throw new Error(error.response.data.message);
>>>>>>> 88d811f3e0cbe9df578fbfca14ff5fdd3808570e
    }
  }
);

export const postBedroom = createAsyncThunk(
  "bedroom/postBedroom",
  async (obj) => {
    try {
      const resp = await axios.post(urlBedroom, obj, {
        headers: {
          Accept: 'application/json',
        },
      });
      return resp.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const putBedroom = createAsyncThunk(
  "bedroom/putBedroom",
  async (obj) => {
    try {
      const resp = await axios.put(urlBedroom, obj, {
        headers: {
          Accept: 'application/json',
        },
      });
      return resp.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const deleteBedroom = createAsyncThunk(
  "bedroom/deleteBedroom",
  async (id) => {
    try {
      const resp = await axios.delete(urlBedroom, { data: { id: id } }, {
        headers: {
          Accept: 'application/json',
        },
      });
      return resp.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
