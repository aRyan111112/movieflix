import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
         showGptSearch: false,
         gptMovies: null,
         movieNames:null,
         movieResults:null,
    },
    reducers:{
        toggleGptSearchView :(state)=>{
            state.showGptSearch=!state.showGptSearch;
        },
        addGptMovieResult:(state, action)=>{
            const {movieNames, movieResults}=action.payload;
            state.movieNames=movieNames;
            state.movieResults=movieResults;
        },
        clearGptSuggestions: (state, action) => {
            state.movieNames = null;
            state.movieResults = null;
        }
    },
})
export const { toggleGptSearchView, addGptMovieResult, clearGptSuggestions } = gptSlice.actions;
export default gptSlice.reducer;