import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSystems } from "services/getService";

const initialState = {
  systems: [
    {
      id: 1,
      name: "КИС",
    },
  ],
  isError: false,
  isSuccess: false,
  isMessege: "",
  isLoading: false,
};

export const systemsSlice = createSlice({
  name: "systems",
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
      .addCase(getSystems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSystems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.systems = action.payload;
        state.isMessege = "Данные о системах пришли!";
      })
      .addCase(getSystems.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isMessege = action.payload;
        state.systems = [];
      });
  },
});

export const { reset } = systemsSlice.actions;
export default systemsSlice.reducer;
