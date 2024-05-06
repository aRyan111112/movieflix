import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    trailerVideo: null,
    movieInfo: null,
    castInfo: null,
    movieVideos: null,
    similarMovies: null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addMovieInfo: (state, action) => {
      state.movieInfo = action.payload
    },
    addCastInfo: (state, action) => {
      state.castInfo = action.payload
    },
    addMovieVideos: (state, action) => {
      state.movieVideos = action.payload
    },
    addSimilarMovies: (state, action) => {
      state.similarMovies = action.payload
    }
  },
});
export const {
  addNowPlayingMovies,
  addUpcomingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
  addMovieInfo,
  addCastInfo,
  addMovieVideos,
  addSimilarMovies
} = movieSlice.actions;
export default movieSlice.reducer;
