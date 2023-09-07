import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL_BEDROOM = 'https://reservas-hotel.onrender.com/bedroom/api';

export const getBedroom = createAsyncThunk(
  "bedroom/getBedroom",
  async () => {
    try {
      const resp = await axios.get(URL_BEDROOM, {
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
     const resp = await axios.get(`${URL_BEDROOM}/detail/${id}`, {
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
      const resp = await axios.post(URL_BEDROOM, obj, {
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
      const resp = await axios.put(URL_BEDROOM, obj, {
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
      const resp = await axios.delete(URL_BEDROOM, { data: { id: id } }, {
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

