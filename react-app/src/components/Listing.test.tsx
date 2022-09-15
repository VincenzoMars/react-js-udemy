import React from "react";
import { Provider } from "react-redux";
import store from "../store";
import { render, screen } from "@testing-library/react";
import Listing from "./Listing";
import "@testing-library/jest-dom";

describe("Listing", () => {
  test("if initial movies are rendered", async () => {
    // Arrange
    render(
      <Provider store={store}>
        <Listing />
      </Provider>
    );
    // Act
    // nothing...

    // Assert
    const headingElement = await screen.findAllByRole(
      /listing__category-items/i
    );
    expect(headingElement).not.toHaveLength(0);
  });
});
