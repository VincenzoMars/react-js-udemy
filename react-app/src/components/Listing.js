import { useEffect, useCallback, useMemo } from 'react'
import { createPortal } from 'react-dom'
import { getInitialMovies } from '../services/movies'
import '../assets/styles/components/listing.scss';
import ListingItem from './ListingItem'
import ListingModal from './ListingModal'

import { useListingContext } from '../contexts/Listing';

const Listing = () => {
  const { listingState, dispatch } = useListingContext()

  const getMovies = useCallback(async () => {
    const movies = await getInitialMovies()
    dispatch({ type: 'SET_FETCHED_MOVIES', movies })
  }, [dispatch])

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  const setMovieInModal = (imdbID) => dispatch({ type: 'SET_MOVIE_BY_ID', imdbID })
  const resetMovieInModal = () => dispatch({ type: 'RESET_MOVIE' })

  const moviesMemo = useMemo(() => listingState.movies, [listingState.movies])

  return (
    <>
      <div className="listing">
        <h2 className="listing__category-title">Movies</h2>
        <div className="listing__category-items">
          {moviesMemo.map((movie) =>
            <ListingItem
              key={movie.imdbID}
              item={movie}
              onShowMoreModal={setMovieInModal}
            />
          )}
        </div>
      </div>
      {createPortal(<ListingModal
        movie={listingState.modal.movie}
        isOpen={listingState.modal.isOpen}
        onCloseModal={resetMovieInModal}
      />, document.getElementById('modal-root'))}
    </>
  )
}

export default Listing;
