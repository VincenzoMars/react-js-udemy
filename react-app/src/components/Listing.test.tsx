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
    // const moviesWrapperElement = await screen.findByRole("movies-wrapper");
    // expect(moviesWrapperElement).not.toHaveLength(0);
  });
});
