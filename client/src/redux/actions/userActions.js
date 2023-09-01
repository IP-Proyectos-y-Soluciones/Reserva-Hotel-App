import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const urlUsers= "http://localhost:3001/users";
const urlUsersPost ="http://localhost:3001/users/verify";


export const getUsers=createAsyncThunk(
    "users/getUsers",
    async()=>{
        try{

            
   const res = await axios.get(urlUsers , {

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
          const res = await axios.post(urlUsersPost, { verificationCode }, {
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


  


export const loginUser=createAsyncThunk(
    "users/login",
    async ({ email, password }) => {
        try {
          const response = await fetch("http://localhost:3001/users/login", {
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
          return data; 
        } catch (error) {
            throw new Error("Error al iniciar sesión. Por favor, verifica tus credenciales.")
        }
    }
);
export const createUsers=createAsyncThunk(
    "users/createUsers",
    async(payload)=>{
        try{


            const res= await axios.post(urlUsers, payload , {

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
export const putUser = createAsyncThunk(
    "users/putUsers",
    async(obj)=>{
        try{


            const res= await axios.put(urlUsers, obj , {

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


            const res= await axios.get(urlUsers,{data:{id:id}} , {

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


