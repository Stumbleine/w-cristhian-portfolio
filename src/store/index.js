import { configureStore } from "@reduxjs/toolkit";
import settingReducer from "./settings/settingSlice";
export default configureStore({
  reducer: {
    setting: settingReducer,
  },
});
