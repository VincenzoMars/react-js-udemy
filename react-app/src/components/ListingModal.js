import '../assets/styles/components/listing-modal.scss';

const ListingModal = (props) => {

  const { movie, onCloseModal, isOpen } = props

  const closeModalHandler = event => {
    if (event.target === event.currentTarget) {
      onCloseModal()
    }
  }

  if (isOpen) {
    return (
      <div className="modal-overlay" onClick={closeModalHandler}>
        <div className='listing-modal'>
          <h2 className="listing-modal__title">{movie.Title}</h2>
          <p className="listing-modal__desc">{movie.Description}</p>
          <img src={movie.Poster} alt="the item modal itself" />
        </div>
      </div>
    )
  }

  return
}

export default ListingModal;
