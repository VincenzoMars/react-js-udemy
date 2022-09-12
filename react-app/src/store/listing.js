import { createSlice } from '@reduxjs/toolkit'

const listingInitialState = {
    movies: [],
    modal: {
        movie: {},
        isOpen: false
    }
}

const listingReducer = (state = listingInitialState, action) => {
    switch (action.type) {
        case 'SET_FETCHED_MOVIES':
            return {
                ...state,
                movies: action.movies
            }
        case 'SET_MOVIE_BY_ID':
            const movie = state.movies.find(movie => movie.imdbID === action.imdbID)
            return {
                ...state,
                modal: {
                    movie,
                    isOpen: true
                }
            }
        case 'RESET_MOVIE':
            return {
                ...state,
                modal: {
                    movie: {},
                    isOpen: false
                }
            }
        default:
            return state
    }
}

export default listingReducer

/* using slices */
export const listingSlice = createSlice({
    name: 'listing',
    initialState: listingInitialState,
    reducers: {
        setFetchedMovies(state, action) {
            state.movies = action.payload.movies
        },
        setMovieById(state, action) {
            const movie = state.movies.find(movie => movie.imdbID === action.payload.imdbID)
            state.modal = { movie, isOpen: true }
        },
        resetMovie(state) {
            state.modal = { movie: {}, isOpen: false }
        }
    }
});

export const listingActions = listingSlice.actions