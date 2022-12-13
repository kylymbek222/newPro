import { createSlice } from "@reduxjs/toolkit";
import { login, logout, setSession } from "services/authService";
const initialState = {
  user: {
    email: "marklyan@gmail.com",
    password: "$2a$10$zOyvbks0lrNXNDWAVTz3KOqOywH.Q2MSaBJ9oc3k.fVqFZmDpif8O",
    name: "Кылымбек",
    surname: "Токтобеков",
    job: "Разработчик",
    role: "Разработчик",
    level: "Делопроизводитель",
    login: "kylymbek",
    gender: "Мужской",
    systems: "КИС",
    id: 5,
    status: "true",
  },
  isError: false,
  isSuccess: false,
  isMessege: "",
  isLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.isMessege = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.isMessege = "Вы авторизованы!";
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isMessege = action.payload;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = false;
        state.isMessege = "";
      })
      .addCase(setSession.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(setSession.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.isMessege = "Вы авторизованы!";
      })
      .addCase(setSession.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isMessege = action.payload;
        state.user = null;
      });
  },
});

export const { reset, remember, noRemember } = authSlice.actions;
export default authSlice.reducer;
