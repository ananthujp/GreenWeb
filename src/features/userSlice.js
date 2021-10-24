import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user:null,
    batch:null,
  },
  reducers: {
    login: (state,action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user =null;
    },
    setbatch: (state,action)=>{
      state.batch = action.payload;
    }
  },
});

export const { login,logout,setbatch } = userSlice.actions;
export const selectUser= (state) => state.user.user;
export const selectBatch= (state) => state.user.batch;
export default userSlice.reducer;
