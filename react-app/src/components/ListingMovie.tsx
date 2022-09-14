import '../assets/styles/components/listing-item.scss';
import { memo } from 'react'
import ListingMovieProps from '../types/props/ListingMovieProps';

const ListingMovie = (props: ListingMovieProps) => {

  const { movie, onShowMoreModal } = props
  
  if(movie) {

    const showMoreModalEmitter = () => {
      onShowMoreModal(movie.imdbID)
    }

    return (
      <div className="listing-item" onClick={showMoreModalEmitter} >
        <img className="listing-item__poster" src={movie.Poster} alt="the item itself" />
        <div className='listing-item__info'>
          <h2 className="listing-item__info__title">{movie.Title}</h2>
        </div>
        <span className="listing-item__type">{movie.Type}</span>
      </div>
    );
  }

  return <></>

}

export default memo(ListingMovie);
