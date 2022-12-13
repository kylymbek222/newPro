import { createSlice } from "@reduxjs/toolkit";
import { getLevels } from "services/getService";

const initialState = {
  levels: [
    {
      id: 1,
      name: "Делопроизводитель",
    },
    {
      id: 2,
      name: "Зам директор",
    },
    {
      id: 3,
      name: "Начальник",
    },
    {
      id: 4,
      name: "Исполнитель",
    },
  ],
  isError: false,
  isSuccess: false,
  isMessege: "",
  isLoading: false,
};

export const levelsSlice = createSlice({
  name: "levels",
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
      .addCase(getLevels.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getLevels.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.levels = action.payload;
        state.isMessege = "Данные о уровнях пришли!";
      })
      .addCase(getLevels.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isMessege = action.payload;
        state.levels = [];
      });
  },
});

export const { reset } = levelsSlice.actions;
export default levelsSlice.reducer;
