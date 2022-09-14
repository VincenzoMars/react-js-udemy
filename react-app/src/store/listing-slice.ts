import { createSlice } from "@reduxjs/toolkit";
import ListingState from "../types/store/ListingState";
import Movie from "../types/store/Movie";

export const listingInitialState: ListingState = {
  movies: [],
  modal: {
    movie: null,
    isOpen: false,
  },
};

export const listingSlice = createSlice({
  name: "listing",
  initialState: listingInitialState,
  reducers: {
    setFetchedMovies(state, action) {
      state.movies = action.payload.movies;
    },
    setMovieById(state, action) {
      const movie: Movie = state.movies.find(
        (movie) => movie && movie.imdbID === action.payload.imdbID
      )!;
      state.modal = { movie, isOpen: true };
    },
    resetMovie(state) {
      state.modal = { movie: null, isOpen: false };
    },
  },
});

export const listingActions = listingSlice.actions;
