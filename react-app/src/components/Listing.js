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


  const [chosenItemId, setChosenItemId] = useState()
  const [showMoreModalID, setShowMoreModalID] = useState()
  const [showMoreModalItem, setShowMoreModalItem] = useState({})

  const inputRef = useRef()
  const [valueOutput, setValueOutput] = useState()
  const inputValueChange = () => {
    setValueOutput(inputRef.current.value)
  }
  const resetShowMoreItem = () => {
    // reset item to show inside modal to undefined
    setShowMoreModalItem()
  }

  const setShowMoreItem = (imdbID) => {
    setShowMoreModalID(imdbID)
    setShowMoreModalItem(movies.find(item => item.imdbID === imdbID))
  }

  return (
    <>
      <div className="listing">
        <h2 className="listing__category-title">{categoryName}</h2>
        {chosenItemId
          ? <p>The chosen item id is: {chosenItemId}</p>
          : <p>No item chosen</p>
        }
        {showMoreModalItem
          ? <p>The modal item title is: {showMoreModalItem.Title}</p>
          : <p>No modal item active</p>
        }
        <div className="listing__category-items">
          {movies.map((movie) =>
            <ListingItem
              key={movie.imdbID}
              item={movie}
              onItemChoose={setChosenItemId}
              onShowMoreModal={setShowMoreItem}
            />
          )}
        </div>

        <label>Inserisci qualcosa per veder la ref funzionare:</label>
        <input type="text" ref={inputRef} onChange={inputValueChange} />
        <span>Output valore preso dalla ref: <b>{valueOutput}</b></span>

      </div>
      {createPortal(<ListingModal
        item={showMoreModalItem}
        onCloseModal={resetShowMoreItem}
      />, document.getElementById('modal-root'))}
    </>
  );
}

export default Listing;
