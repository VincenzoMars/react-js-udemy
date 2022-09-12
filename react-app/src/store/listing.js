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