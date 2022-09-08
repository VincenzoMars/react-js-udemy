import '../assets/styles/components/listing-item.scss';

const ListingItem = (props) => {

  const { item, onItemChoose, onShowMoreModal } = props

  const changeHandler = () => {
    onItemChoose(item.imdbID)
  }

  const showMoreModalEmitter = () => {
    onShowMoreModal(item.imdbID)
  }


  return (
    <div className="listing-item" onClick={showMoreModalEmitter} >
      <span className="listing-item__type">{item.Type}</span>
      <img className="listing-item__poster" src={item.Poster} alt="the item itself" />
      <div className='listing-item__info'>
        <h2 className="listing-item__info__title">{item.Title}</h2>
        {/* <button onClick={changeHandler}>Choose</button> */}
      </div>
    </div>
  );
}

export default ListingItem;
