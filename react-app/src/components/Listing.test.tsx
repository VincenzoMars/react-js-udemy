import React from 'react';
import { Provider } from 'react-redux';
import { createPortal } from 'react-dom'
import store from '../store'
import { render, screen } from '@testing-library/react';
import Listing from './Listing';
import '@testing-library/jest-dom'


describe('Listing', () => {
  test('test if initial movies are rendered', async () => {
    // Arrange
    render(<>
      <Provider store={store}>
        <Listing />
      </Provider>
      <div id='modal-root'></div>
    </>, { container: document.body });
    // Act
    // nothing...
  
    // Assert
    const headingElement = await screen.findAllByRole(/listing__category-items/i)
    expect(headingElement).not.toHaveLength(0);
  });
})