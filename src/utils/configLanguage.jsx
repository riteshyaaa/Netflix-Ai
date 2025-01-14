import { createSlice } from "@reduxjs/toolkit";


    const configLanguage =    createSlice({
        name: 'lang',
        initialState: {
            language: 'en'

        },
        reducers: {
            changeLangauge: (state, action) =>  {
                state.language = action.payload
            }
        }
    })

 export const {changeLangauge} = configLanguage.actions;
 export default configLanguage.reducer;