import Movie from "./Movie";

type ListingState = {
  movies: Movie[];
  modal: {
    movie: Movie | null;
    isOpen: boolean;
  };
};

export default ListingState;
