import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import rolesSlice from "./slices/rolesSlice";
import levelsSlice from "./slices/levelsSlice";
import systemsSlice from "./slices/systemsSlice";

const Store = configureStore({
  reducer: {
    auth: authSlice,
    roles: rolesSlice,
    levels: levelsSlice,
    systems: systemsSlice,
    devTools: true,
  },
});

export default Store;
