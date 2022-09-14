import Movie from "../store/Movie";

type ListingModalProps = {
  movie: Movie | null;
  isOpen: boolean;
  onCloseModal: () => {};
};

export default ListingModalProps;
