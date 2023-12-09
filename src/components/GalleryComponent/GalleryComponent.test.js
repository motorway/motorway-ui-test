import React from "react";
import { render, fireEvent } from "@testing-library/react";
import GalleryComponent from "./GalleryComponent";

describe("GalleryComponent", () => {
  const mockImages = [
    {
      id: "1",
      url: "http://example.com/image1.jpg",
      alt_description: "Image 1",
      user: { username: "User2" },
    },
    {
      id: "2",
      url: "http://example.com/image2.jpg",
      alt_description: "Image 2",
      user: { username: "User2" },
    },
    {
      id: "3",
      url: "http://example.com/image3.jpg",
      alt_description: "Image 3",
      user: { username: "User3" },
    },
    {
      id: "4",
      url: "http://example.com/image4.jpg",
      alt_description: "Image 4",
      user: { username: "User4" },
    },
    {
      id: "5",
      url: "http://example.com/image5.jpg",
      alt_description: "Image 5",
      user: { username: "User5" },
    },
    {
      id: "6",
      url: "http://example.com/image6.jpg",
      alt_description: "Image 6",
      user: { username: "User6" },
    },
    {
      id: "7",
      url: "http://example.com/image7.jpg",
      alt_description: "Image 7",
      user: { username: "User7" },
    },
    {
      id: "8",
      url: "http://example.com/image8.jpg",
      alt_description: "Image 8",
      user: { username: "User8" },
    },
    {
      id: "9",
      url: "http://example.com/image9.jpg",
      alt_description: "Image 9",
      user: { username: "User9" },
    },
    {
      id: "10",
      url: "http://example.com/image10.jpg",
      alt_description: "Image 10",
      user: { username: "User10" },
    },
  ];

  it("renders without crashing", () => {
    render(<GalleryComponent images={mockImages} />);
  });

  it("displays all images", () => {
    const { getAllByAltText } = render(
      <GalleryComponent images={mockImages} />
    );
    expect(getAllByAltText(/Image \d/)).toHaveLength(mockImages.length);
  });

  it("opens and closes the modal when an image is clicked", () => {
    const { getByAltText, queryByRole } = render(
      <GalleryComponent images={mockImages} />
    );

    expect(queryByRole("dialog")).not.toBeInTheDocument();

    fireEvent.click(getByAltText("Image 1"));
    const modal = queryByRole("dialog");
    expect(modal).toBeInTheDocument();

    fireEvent.click(modal);
    expect(queryByRole("dialog")).not.toBeInTheDocument();
  });
});
