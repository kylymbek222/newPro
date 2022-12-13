import { createSlice } from "@reduxjs/toolkit";
import { getRoles } from "services/getService";

const initialState = {
  roles: [
    {
      id: 1,
      name: "Разработчик",
    },
    {
      id: 2,
      name: "Бухгалтер",
    },
    {
      id: 3,
      name: "Специалист делопроизводитель",
    },
    {
      id: 4,
      name: "Администратор систем",
    },
    {
      id: 5,
      name: "Аналитик",
    },
    {
      id: 6,
      name: "Руководитель проектов",
    },
    {
      id: 7,
      name: "Специалист материально-техническиого обеспечения",
    },
    {
      id: 8,
      name: "Администратор систем",
    },
  ],
  isError: false,
  isSuccess: false,
  isMessege: "",
  isLoading: false,
};

export const rolesSlice = createSlice({
  name: "roles",
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
      .addCase(getRoles.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRoles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.roles = action.payload;
        state.isMessege = "Данные о ролей пришли!";
      })
      .addCase(getRoles.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isMessege = action.payload;
        state.roles = [];
      });
  },
});

export const { reset } = rolesSlice.actions;
export default rolesSlice.reducer;
