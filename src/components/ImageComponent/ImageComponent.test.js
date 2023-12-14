import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ImageComponent from "./ImageComponent";

describe("ImageComponent", () => {
  it("renders without crashing", () => {
    const { getByAltText } = render(
      <ImageComponent
        imagePath="test"
        altText="Test Image"
        className="test-class"
      />
    );
    expect(getByAltText("Test Image")).toBeInTheDocument();
  });

  it("displays the loading placeholder before image load", () => {
    const { getByAltText } = render(
      <ImageComponent
        imagePath="test"
        altText="Test Image"
        className="test-class"
      />
    );
    expect(getByAltText("Test Image")).toHaveStyle("display: none");
  });

  it("hides the loading placeholder and displays the image on successful image load", () => {
    const { getByAltText } = render(
      <ImageComponent
        imagePath="test"
        altText="Test Image"
        className="test-class"
      />
    );
    fireEvent.load(getByAltText("Test Image"));
    expect(getByAltText("Test Image")).toHaveStyle("display: block");
  });

  it("logs an error on image load error", () => {
    console.log = jest.fn();
    const { getByAltText } = render(
      <ImageComponent
        imagePath="test"
        altText="Test Image"
        className="test-class"
      />
    );
    fireEvent.error(getByAltText("Test Image"));
    expect(console.log).toHaveBeenCalled();
  });
});
