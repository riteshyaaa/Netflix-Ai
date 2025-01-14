import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice"; 
import gptReducer from "./gptSlice";
import configReducer from "./configLanguage"

const appStore = configureStore({
    reducer:{
        user: userReducer,
        movies: moviesReducer,
          gpt:gptReducer,
         configLanguage : configReducer
    }

});
export default appStore;
