import { createAsyncThunk } from "@reduxjs/toolkit";
import $api from "http/axios";

export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    const response = await $api.post("/login", user);
    localStorage.setItem("accessToken", response.data.accessToken);
    localStorage.setItem("user", JSON.stringify(response.data.user));
    return response.data.user;
  } catch (error) {
    const message = error.response.data;
    return thunkAPI.rejectWithValue(message);
  }
});

// Выход пользователя
export const logout = createAsyncThunk("auth/logout", async () => {
  localStorage.clear();
});

// Выход пользователя
export const setSession = createAsyncThunk(
  "auth/setSession",
  async (accessToken, thunkAPI) => {
    try {
      if (accessToken) {
        const user = JSON.parse(localStorage.getItem("user"));
        return user;
      } else {
        localStorage.clear();
        throw new Error("accsessTokenInValid");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
