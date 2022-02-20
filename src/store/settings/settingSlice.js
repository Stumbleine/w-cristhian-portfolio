import { createSlice } from "@reduxjs/toolkit";
import dataEnglish from "../../features/infoEnglish.json";
import dataSpanish from "../../features/infoSpanish.json";

const initialState = {
  theme: {
    mode: "dark",
  },
  language: {
    spanish: false,
    english: true,
  },
  data: dataEnglish[0],
};

const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    setThemeMode: (state) => {
      let m = state.theme.mode === "light" ? "dark" : "light";
      state.theme.mode = m;
    },
    setLanguageEn: (state) => {
      state.language.english = true;
      state.language.spanish = false;
      state.data = dataEnglish[0];
    },
    setLanguageEs: (state) => {
      state.language.english = false;
      state.language.spanish = true;
      state.data = dataSpanish[0];
    },
  },
});

export const { setThemeMode, setLanguageEn, setLanguageEs } =
  settingSlice.actions;
export default settingSlice.reducer;
