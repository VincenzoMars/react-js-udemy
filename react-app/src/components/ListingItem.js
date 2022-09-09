import '../assets/styles/components/listing-item.scss';
import { memo } from 'react'
const ListingItem = (props) => {

  const { item, onShowMoreModal } = props

  const showMoreModalEmitter = () => {
    onShowMoreModal(item.imdbID)
  }

  return (
    <div className="listing-item" onClick={showMoreModalEmitter} >
      <img className="listing-item__poster" src={item.Poster} alt="the item itself" />
      <div className='listing-item__info'>
        <h2 className="listing-item__info__title">{item.Title}</h2>
      </div>
      <span className="listing-item__type">{item.Type}</span>
    </div>
  );
}

export default memo(ListingItem);
