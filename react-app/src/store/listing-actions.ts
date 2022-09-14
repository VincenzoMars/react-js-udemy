import { Dispatch } from "react";
import { AnyAction } from "redux";

import { listingActions } from "./listing-slice";

const APIKey = "3eacc095";
const APIbaseUrl = `http://www.omdbapi.com/?apikey=${APIKey}`;
const APIinitialSearch = "&s=game&page=1";

export const fetchMovies = () => {
  return async (dispatch: Dispatch<AnyAction>) => {
    try {
      const movies = await fetch(APIbaseUrl + APIinitialSearch)
        .then((response) => response.json())
        .then((res) => res.Search);
      dispatch(listingActions.setFetchedMovies({ movies }));
    } catch (error) {
      debugger;
    }
  };
};

let fetchTimeout: ReturnType<typeof setTimeout>;
export const fetchMoviesByName = (movieName: string) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    clearTimeout(fetchTimeout);
    fetchTimeout = setTimeout(async () => {
      const res = await fetch(APIbaseUrl + `&s=${movieName}&page=1`)
        .then((response) => response.json())
        .catch(() => {
          debugger;
        });
      if (res.Response === "False") {
        console.log(res.Error);
        return;
      }
      dispatch(listingActions.setFetchedMovies({ movies: res.Search }));
    }, 500);
  };
};
