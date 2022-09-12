import { useEffect, useCallback, useState } from 'react'
import { fetchMovies } from '../services/movies'

const useMovies = (dispatch) => {

    const [movies, setMovies] = useState([])

    const getMovies = useCallback(async () => {
        const movies = await fetchMovies()
        setMovies(movies)
        dispatch({ type: 'SET_FETCHED_MOVIES', movies })
    }, [dispatch])

    useEffect(() => {
        getMovies();
    }, [getMovies]);

    return [movies, setMovies]
}

export default useMovies