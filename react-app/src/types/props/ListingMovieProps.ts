import Movie from "../store/Movie";

type ListingMovieProps = {
  movie: Movie;
  onShowMoreModal: (imdbID: string) => {};
};

export default ListingMovieProps;
