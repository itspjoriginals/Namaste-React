import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        popularMovies: null,
        topRatedMovies: null,
        comedyMovies: null,
        actionMovies: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addComedyMovies: (state, action) => {
            state.comedyMovies = action.payload;
        },
        addActionMovies: (state, action) => {
            state.actionMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        }
    }

});

export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies, addComedyMovies, addActionMovies } = moviesSlice.actions;
export default moviesSlice.reducer;