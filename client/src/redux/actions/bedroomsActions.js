import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const urlBedroom = "https://reserva-hotel-app-orig-pcpqczlci-juanbog19.vercel.app/bedroom";

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
    }
  }
);

export const getBedroomId = createAsyncThunk(
  "bedroom/getBedroomId",
  async (id) =>{
    try {
     const resp = await axios.get(`http://localhost:3001/bedroom/detail/${id}`, {
      headers: {
        Accept: 'application/json',
      },
    });
    return resp.data;
    } catch (error){
      return Promise.reject(error.response.data.message);
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

