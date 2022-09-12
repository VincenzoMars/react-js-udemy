import { createContext, useContext, useReducer } from 'react';

export const ListingContext = createContext({ listingState: null, dispatch: () => { } });
export const useListingContext = () => useContext(ListingContext)
const initialListingContext = {
    movies: [],
    modal: {
        movie: {},
        isOpen: false
    }
}
const listingReducer = (state = initialListingContext, action) => {
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
export const ListingContextProvider = ({ children }) => {
    const [listingState, dispatch] = useReducer(listingReducer, initialListingContext)
    return <ListingContext.Provider value={{ listingState, dispatch }}>{children}</ListingContext.Provider>
}