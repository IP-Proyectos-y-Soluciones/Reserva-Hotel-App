import { createSlice } from '@reduxjs/toolkit';
import {getUsers, putUser,updatedsUser,createUsersVerify, loginUser,logoutUser } from '../actions/userActions';

const loadUserFromLocalStorage = () => {
  try {
    const userJSON = localStorage.getItem('user');
    return JSON.parse(userJSON) || null;
  } catch (error) {
    return null;
  }
};
const initialState = {
  users: [],
  usersCopy: [],
  userData:[],
  userLogin:[],
  user:loadUserFromLocalStorage(),
  loggedInUserId: null, // Agrega un campo para almacenar el ID del usuario logueado
  isLoading:false,
  error:null,
  success:false,
  userId:null,
};


const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
   // filterUsers : (state, action)=>{
//
    //  const {search, member} = action.payload
    //  member == "all"?
    //    state.usersCopy = state.users.filter(user=> user.name.toLowerCase().includes(search?.toLowerCase()) || user.surname.toLowerCase().includes(search?.toLowerCase()))
    //    : 
    //    state.usersCopy = state.users.filter(user=> user.isMember === (member == "true"? true : false) && ( user.name.toLowerCase().includes(search.toLowerCase()) || user.surname.toLowerCase().includes(search.toLowerCase())) ) ;
    //},
    updatedUser:(state,action)=>{
      state.user=action.payload,
      localStorage.setItem('user', JSON.stringify(action.payload));
      //console.log(user)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.fulfilled, (state, action) => {
        state.error = "";
        state.users = action.payload;
        state.usersCopy = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.error = 'Error occurred while fetching sports data.';
        state.users = action.payload;
      })
      .addCase(putUser.fulfilled, (state, action) => {
        state.error = "";
        state.users = action.payload;
        state.usersCopy = action.payload;
      })
      .addCase(createUsersVerify.fulfilled, (state,action)=>{
        state.userData=action.payload;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.userLogin = action.payload;
        state.loggedInUserId = action.payload.userId; // Actualiza el campo loggedInUserId
      })
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.success = action.payload.success;
        state.userId = action.payload.userId;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Error al cerrar sesión.';
        state.success = false;
      })

      .addCase(updatedsUser.fulfilled, (state, action) => {
        state.userData = action.payload;
      });
  },
});

export const { updatedUser } = usersSlice.actions;
export default usersSlice.reducer;