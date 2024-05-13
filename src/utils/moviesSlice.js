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
    discoverMovies: null,
    similarMovies: null,
    allTimeFav: null,
    castMovies: null,
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
    },
    addallTimeFav: (state, action) => {
      state.allTimeFav = action.payload
    },
    addDiscoverMovies: (state, action) => {
      state.discoverMovies = action.payload
    },
    clearMovieInfo: (state, action) => {
      state.movieInfo = null
    },
    addCastMovies: (state, action) => {
      state.castMovies = action.payload
    },
    clearCastMovies: (state, action) => {
      state.castMovies = null
    }
  },
});
export const {
  addNowPlayingMovies,
  addallTimeFav,
  addUpcomingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
  addMovieInfo,
  addCastInfo,
  addMovieVideos,
  addSimilarMovies,
  addDiscoverMovies,
  clearMovieInfo,
  addCastMovies,
  clearCastMovies
} = movieSlice.actions;
export default movieSlice.reducer;
