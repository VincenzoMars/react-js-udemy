// DEPRECATED

import { useEffect, useCallback, useState } from 'react'
import { fetchMovies } from '../services/movies'
import { listingActions } from '../store/listing-slice'

const useMovies = (dispatch) => {

    const [movies, setMovies] = useState([])

    const getMovies = useCallback(async () => {
        const movies = await fetchMovies()
        setMovies(movies)
        // dispatch({ type: 'SET_FETCHED_MOVIES', movies }) ----- using the normal reducer
        dispatch(listingActions.setFetchedMovies({ movies }))
    }, [dispatch])

    useEffect(() => {
        getMovies();
    }, [getMovies]);

    return [movies, setMovies]
}

export default useMovies