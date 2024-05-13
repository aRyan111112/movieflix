import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
    otherURL: false,
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.lang = action.payload;
    },
    setOtherURL: (state, action) => {
      state.otherURL = action.payload;
  }
  },
});
export const { changeLanguage, setOtherURL } = configSlice.actions;
export default configSlice.reducer;
