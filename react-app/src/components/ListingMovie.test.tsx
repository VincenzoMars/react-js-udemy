import React from 'react';
import { render, screen } from '@testing-library/react';
import ListingMovie from './ListingMovie';
import '@testing-library/jest-dom'

import ListingMoviePropsType from '../types/props/ListingMovieProps'

const withoutMovieProps: ListingMoviePropsType = {
  movie: null,
  onShowMoreModal: (imdbID: string) => ({})
}

const withMovieProps: ListingMoviePropsType = {
  movie: {
    Title: 'Title Content',
    Year: '2022',
    imdbID: '1',
    Type: 'Type Content',
    Poster: 'PosterURL Content'
  },
  onShowMoreModal: (imdbID: string) => ({})
}

describe('ListingMovie', () => {
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
    const titleElement = screen.getByText(/Title Content/i);
    expect(titleElement).toBeInTheDocument();
    const typeElement = screen.getByText(/Type Content/i);
    expect(typeElement).toBeInTheDocument();
    const posterElement = screen.queryByAltText(/the item itself/i)
    expect(posterElement).toBeInTheDocument();
  });
})