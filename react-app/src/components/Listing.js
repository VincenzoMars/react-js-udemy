import { useMemo } from 'react'
import { createPortal } from 'react-dom'
import '../assets/styles/components/listing.scss';
import ListingItem from './ListingItem'
import ListingModal from './ListingModal'
import useMovies from '../hooks/use-movies'

import { useListingContext } from '../contexts/Listing';

const Listing = () => {
  const { listingState, dispatch } = useListingContext()

  useMovies(dispatch)

  const setMovieInModal = (imdbID) => dispatch({ type: 'SET_MOVIE_BY_ID', imdbID })
  const resetMovieInModal = () => dispatch({ type: 'RESET_MOVIE' })

  /* in realtà per non far ri-valutare il componente figlio ad ogni cambio di stato del padre
    dovremmo usare delle useCallback() anche per le due funzioni subito sopra perchè sono props dell'item 
    perchè senza useCallback vengono re-inizializzate e quindi la prop le percepisce come 'nuove' 
    */
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
