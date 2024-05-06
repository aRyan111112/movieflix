import { createSlice } from "@reduxjs/toolkit";

const movieInfoSlice = createSlice({
    name:"movieInfo",
    initialState: {
        posterBackground: null,
        poster: null,
        title: null
    },
    reducers: {
        addPosterbackground: (state, action) => {
            state.posterBackground = action.payload;
        },
        addPoster: (state, action) => {
            state.poster = action.payload;
        },
        addTitle: (state, action) => {
            state.title = action.payload;
        }
    }
})

export const {
    addPosterbackground,
    addPoster,
    addTitle
} = movieInfoSlice.actions;

export default movieInfoSlice.reducer;