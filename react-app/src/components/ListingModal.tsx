import '../assets/styles/components/listing-modal.scss';
import ListingModalProps from '../types/props/ListingModalProps';

const ListingModal = (props : ListingModalProps) => {

  const { movie, onCloseModal, isOpen } = props

  const closeModalHandler = (event: any) => {
    if (event.target === event.currentTarget) {
      onCloseModal()
    }
  }

  if (movie && isOpen) {
    return (
      <div className="modal-overlay" onClick={closeModalHandler}>
        <div className='listing-modal'>
          <h2 className="listing-modal__title">{movie.Title}</h2>
          <img src={movie.Poster} alt="the item modal itself" />
        </div>
      </div>
    )
  }

  return <></>
}

export default ListingModal;
