import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL_USERS = "https://reservas-hotel.onrender.com/users/api";
const URL_USER_POST ="https://reservas-hotel.onrender.com/users/verify/api";


export const getUsers=createAsyncThunk(
    "users/getUsers",
    async()=>{
        try{

            
   const res = await axios.get(URL_USERS , {

                headers: {
                  Accept: 'application/json',
                },
              });
            return res.data
        
    } catch(error){
     throw new Error(error.response.data.message)
    }
   }  
);




export const createUsersVerify = createAsyncThunk(
  "users/createUsersVerify",
  async ({ verificationCode }) => {
      try {
          const res = await axios.post(URL_USER_POST , { verificationCode }, {
              headers: {
                  Accept: 'application/json',
              },
          });
          return res.data;
      } catch (error) {
          throw new Error(error.response.data.message);
      }
  }
);


  


export const loginUser = createAsyncThunk(
  "users/login",
  async ({ email, password }) => {
    try {
      const response = await fetch("https://reservas-hotel.onrender.com/users/login/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Failed to login");
      }

      const data = await response.json();
      const { success, logged, userId, userPhoto } = data;

      if (success && logged && userId) {
        return { userId, logged, success, userPhoto };
      } else {
        throw new Error("Error al iniciar sesión. Por favor, verifica tus credenciales.");
      }
    } catch (error) {
      console.error(error)
      throw new Error("Error al iniciar sesión. Por favor, verifica tus credenciales.");
    }
  }
);


export const logoutUser = createAsyncThunk(
  "users/logout",
  async ({ userId }) => {
    try {
      const response = await fetch("https://reservas-hotel.onrender.com/users/logout/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId }),
      });

      if (!response.ok) {
        throw new Error(`Failed to logout - HTTP Status: ${response.status}`);
      }

      const data = await response.json();
      const { success } = data;

      if (success) {
        return { userId, logged: false, success };
      } else {
        throw new Error("Error al cerrar sesión.");
      }
    } catch (error) {
      throw new Error("Error al cerrar sesión.");
    }
  }
);


export const createUsers=createAsyncThunk(
    "users/createUsers",
    async(payload)=>{
        try{


            const res= await axios.post(URL_USERS, payload , {

                headers: {
                  Accept: 'application/json',
                },
              });
            return res.data
        }
        
        catch(error){

          console.log(error.message);
            throw new Error("ya existe ese mail")
        }
    }
);


export const putUser = createAsyncThunk(
    "users/putUsers",
    async(obj)=>{
        try{


            const res= await axios.put(URL_USERS, obj , {

                headers: {
                  Accept: 'application/json',
                },
              });
            return res.data
        } catch(error){
            throw new Error(error.response.data.message)
        }
    }
);

export const updatedsUser=createAsyncThunk(
    "users/updatedsUser",
    async(id) =>{
        try{


            const res= await axios.get(URL_USERS,{data:{id:id}} , {

                headers: {
                  Accept: 'application/json',
                },
              })
            return res.data
        }catch(error){
            throw new Error(error.response.data.message)
        }
    }
);




