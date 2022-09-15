import React from 'react';
import { render, screen } from '@testing-library/react';
import ListingMovie from './ListingMovie';

import ListingMoviePropsType from '../types/props/ListingMovieProps'

const withoutMovieProps: ListingMoviePropsType = {
  movie: null,
  onShowMoreModal: (imdbID: string) => ({})
}

const withMovieProps: ListingMoviePropsType = {
  movie: {
    Title: 'Title',
    Year: '2022',
    imdbID: '1',
    Type: 'Type',
    Poster: 'PosterURL'
  },
  onShowMoreModal: (imdbID: string) => ({})
}

test('listing item WITHOUT correct movie prop', () => {
  // Arrange
  render(<ListingMovie {...withoutMovieProps} />);
  
  // Act
  // nothing...

  // Assert
  const headingElement = screen.getByText(/Movie Not Found!/i);
  expect(headingElement).toBeInTheDocument();
});

test('listing item WITH correct movie prop', () => {
  // Arrange
  render(<ListingMovie {...withMovieProps} />);

  // Act
  // nothing...

  // Assert
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});