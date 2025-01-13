import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch : false,
    },
    reducers: {
        addtoggleGptSearch: (state) => {
            state.showGptSearch = !state.showGptSearch;
           
        },
      
        }
    
 
})

export const {addtoggleGptSearch} = gptSlice.actions;
export default gptSlice.reducer;