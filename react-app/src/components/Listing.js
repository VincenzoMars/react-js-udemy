import { useState, useEffect, useRef, useReducer } from 'react'
import { createPortal } from 'react-dom'
import { getInitialMovies } from '../services/movies'
import '../assets/styles/components/listing.scss';
import ListingItem from './ListingItem'
import ListingModal from './ListingModal'

const categoryName = 'Category Name'

const Listing = () => {

  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const movies = await getInitialMovies();
    setMovies(movies);
  }

  useEffect(() => {
    getMovies();
  }, []);


  const modalMovieReducer = (state, action) => {
    switch (action.type) {
      case 'SET_MOVIE_BY_ID':
        const movie = movies.find(movie => movie.imdbID === action.imdbID)
        return { movie, isOpen: true }
      case 'RESET_MOVIE':
        return modalMovieInitialState
      default:
        throw new Error()
    }
  }
  const modalMovieInitialState = { movie: {}, isOpen: false }
  const [modalMovieState, modalMovieDispatch] = useReducer(modalMovieReducer, modalMovieInitialState);
  const setModalMovie = (imdbID) => modalMovieDispatch({ type: 'SET_MOVIE_BY_ID', imdbID })
  const resetModalMovie = () => modalMovieDispatch({ type: 'RESET_MOVIE' })

  const inputRef = useRef()
  const [valueOutput, setValueOutput] = useState()
  const inputValueChange = () => {
    setValueOutput(inputRef.current.value)
  }

  return (
    <>
      <div className="listing">
        <h2 className="listing__category-title">{categoryName}</h2>
        <div className="listing__category-items">
          {movies.map((movie) =>
            <ListingItem
              key={movie.imdbID}
              item={movie}
              onShowMoreModal={setModalMovie}
            />
          )}
        </div>
        <label>Inserisci qualcosa per veder la ref funzionare:</label>
        <input type="text" ref={inputRef} onChange={inputValueChange} />
        <span>Output valore preso dalla ref: <b>{valueOutput}</b></span>
      </div>
      {createPortal(<ListingModal
        movie={modalMovieState.movie}
        isOpen={modalMovieState.isOpen}
        onCloseModal={resetModalMovie}
      />, document.getElementById('modal-root'))}
    </>
  );
}

export default Listing;
