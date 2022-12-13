import { createAsyncThunk } from "@reduxjs/toolkit";
import $api from "http/axios";

export const getRoles = createAsyncThunk("roles/getRoles", async (thunkAPI) => {
  try {
    const response = await $api.get("/roles");
    return response.data;
  } catch (error) {
    const message = error.response.data;
    return thunkAPI.rejectWithValue(message);
  }
});

export const getSystems = createAsyncThunk(
  "systems/getSystems",
  async (thunkAPI) => {
    try {
      const response = await $api.get("/systems");
      return response.data;
    } catch (error) {
      const message = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getLevels = createAsyncThunk(
  "levels/getLevels",
  async (thunkAPI) => {
    try {
      const response = await $api.get("/levels");
      return response.data;
    } catch (error) {
      const message = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);
