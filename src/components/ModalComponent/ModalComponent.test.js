import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ModalComponent from "./ModalComponent";

describe("ModalComponent", () => {
  const mockCloseModal = jest.fn();
  const mockSelectedImage = {
    url: "http://example.com/image.jpg",
    alt_description: "Image description",
    likes: 10,
    user: {
      username: "User1",
      profile_image: "http://example.com/profile.jpg",
      location: "Location1",
    },
  };

  it("renders without crashing", () => {
    render(
      <ModalComponent
        closeModal={mockCloseModal}
        selectedImage={mockSelectedImage}
      />
    );
  });

  it("displays the selected image and its details", () => {
    const { getByAltText, getByText } = render(
      <ModalComponent
        closeModal={mockCloseModal}
        selectedImage={mockSelectedImage}
      />
    );

    expect(getByAltText(mockSelectedImage.alt_description)).toBeInTheDocument();
    expect(getByText(`Likes: ${mockSelectedImage.likes}`)).toBeInTheDocument();
    expect(
      getByText(`Username: ${mockSelectedImage.user.username}`)
    ).toBeInTheDocument();
    expect(
      getByText(`Location: ${mockSelectedImage.user.location}`)
    ).toBeInTheDocument();
  });

  it("calls the closeModal function when clicked", () => {
    const { getByRole } = render(
      <ModalComponent
        closeModal={mockCloseModal}
        selectedImage={mockSelectedImage}
      />
    );

    fireEvent.click(getByRole("dialog"));
    expect(mockCloseModal).toHaveBeenCalled();
  });
});
