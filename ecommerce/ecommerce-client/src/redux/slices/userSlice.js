import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
  //   value:{
  //     id:""
  //     firstName:""
  //     email:""
  //     isSeller:""
  //   }
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      console.log(action.payload);
      console.log("redux login....");
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = null;
      localStorage.removeItem("accessToken");
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
