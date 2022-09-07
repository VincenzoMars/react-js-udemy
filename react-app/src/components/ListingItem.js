import '../assets/styles/components/listing-item.scss';

const ListingItem = (props) => {

  const { item, onItemChoose, onShowMoreModal } = props

  const changeHandler = () => {
    onItemChoose(item.id)
  }

  const showMoreModalEmitter = () => {
    onShowMoreModal(item.id)
  }


  return (
    <div className="listing-item" onClick={showMoreModalEmitter}>
      <h2 className="listing-item__title">{item.title}</h2>
      <p className="listing-item__desc">{item.description}</p>
      <img src={item.imageUrl} alt="the item itself" />
      <button onClick={changeHandler}>Choose</button>
    </div>
  );
}

export default ListingItem;
