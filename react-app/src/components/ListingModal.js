import '../assets/styles/components/listing-modal.scss';

const ListingModal = (props) => {

  const { item } = props

  if (!item) {
    return
  }

  return (
    <div className="modal-overlay">
      <div className='listing-modal'>
        <h1>modale assurda</h1>
        <h2 className="listing-modal__title">{item.title}</h2>
        <p className="listing-modal__desc">{item.description}</p>
        <img src={item.imageUrl} alt="the item modal itself" />
      </div>
    </div>
  );
}

export default ListingModal;
