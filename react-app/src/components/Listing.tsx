import { useMemo, useEffect } from "react";
import "../assets/styles/components/listing.scss";
import ListingMovie from "./ListingMovie";
import ListingModal from "./ListingModal";
import Portal from "./Portal";
import { useSelector, useDispatch } from "react-redux";
import { listingActions } from "../store/listing-slice";
import { fetchMovies, fetchMoviesByName } from "../store/listing-actions";
import State from "../types/store/State";

// typed dispatch handmade
import AppDispatch from "../types/store/AppDispatch";

const Listing = () => {
  const dispatch: AppDispatch = useDispatch();
  const listingState = useSelector((state: State) => state.listing);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const searchMoviesByName = (event: React.FormEvent<HTMLInputElement>) => {
    debugger;
    const movieName = event.currentTarget.value;
    dispatch(fetchMoviesByName(movieName));
  };

  const setMovieInModal = (imdbID: string) =>
    dispatch(listingActions.setMovieById({ imdbID }));
  const resetMovieInModal = () => dispatch(listingActions.resetMovie());

  const moviesMemo = useMemo(() => listingState.movies, [listingState.movies]);

  return (
    <>
      <div className="listing">
        <h3>search</h3>
        <input type="text" onChange={searchMoviesByName} />
        <h2 className="listing__category-title">Movies</h2>
        <div className="listing__category-items">
          {moviesMemo.map((movie) => (
            <ListingMovie
              key={movie && movie.imdbID}
              movie={movie}
              onShowMoreModal={setMovieInModal}
            />
          ))}
        </div>
      </div>
      <Portal
        children={
          <ListingModal
            movie={listingState.modal.movie}
            isOpen={listingState.modal.isOpen}
            onCloseModal={resetMovieInModal}
          />
        }
        target="modal-root"
      />
    </>
  );
};

export default Listing;
