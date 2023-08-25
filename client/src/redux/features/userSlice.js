import { createSlice } from '@reduxjs/toolkit';
import {getUsers, putUser,updatedsUser,createUsersVerify } from '../actions/userActions';

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
  user:loadUserFromLocalStorage(),
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    filterUsers : (state, action)=>{

      const {search, member} = action.payload
      member == "all"?
        state.usersCopy = state.users.filter(user=> user.name.toLowerCase().includes(search?.toLowerCase()) || user.surname.toLowerCase().includes(search?.toLowerCase()))
        : 
        state.usersCopy = state.users.filter(user=> user.isMember === (member == "true"? true : false) && ( user.name.toLowerCase().includes(search.toLowerCase()) || user.surname.toLowerCase().includes(search.toLowerCase())) ) ;
    },
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
        state.users = [];
      })
      .addCase(putUser.fulfilled, (state, action) => {
        state.error = "";
        state.users = action.payload;
        state.usersCopy = action.payload;
      })
      .addCase(createUsersVerify.fulfilled, (state,action)=>{
        state.user=action.payload;
      })
      .addCase(updatedsUser.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export const { filterUsers,updatedUser } = usersSlice.actions;
export default usersSlice.reducer;