import '../assets/styles/components/listing-item.scss';

const ListingItem = (props) => {

  const changeHandler = () => {
    props.onItemChoose(props.id)
  }

  const { item } = props

  return (
    <div className="listing-item">
      <h2 className="listing-item__title">{item.title}</h2>
      <p className="listing-item__desc">{item.description}</p>
      <img src={item.imageUrl} alt="the item itself" />
      <button onClick={changeHandler}>Choose</button>
    </div>
  );
}

export default ListingItem;
