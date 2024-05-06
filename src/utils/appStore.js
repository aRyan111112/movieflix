import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./moviesSlice"
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";
import movieInfoReducer from "./movieInfoSlice"
const appStore = configureStore({
    reducer: {
      user: userReducer,
      movies:movieReducer,
      gpt:gptReducer,
      config:configReducer,
      movieInfo:movieInfoReducer
    },
  });

  export default appStore;

