import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GalleryViewModal from "./gallery-view-modal";

describe("GalleryViewModal", () => {
  const mockShowModal = jest.fn();
  const mockCloseGalleryView = jest.fn();
  const mockOnNextImage = jest.fn();
  const mockOnPreviousImage = jest.fn();

  beforeAll(() => {
    /**
     * I chose to use a dialog to display the modal as it's far more accessible, prevents interaction with
     * the content behind and the keyboard navigation automatically focuses onto the content in the modal.
     *
     * Unfortunately JSDOM doesn't support dialog modals just yet so I've had to mock the `showModal` function.
     */
    HTMLDialogElement.prototype.showModal = mockShowModal;
  });

  beforeEach(() => {
    render(
      <GalleryViewModal
        imageUrl="https://motorway-ui-test.s3.eu-west-2.amazonaws.com/car-images/YApS6TjKJ9c"
        description="Mercedes Benz AMG C63S"
        altDescription="black Mercedes-Benz car"
        numberOfLikes={20}
        closeGalleryView={mockCloseGalleryView}
        onNextImage={mockOnNextImage}
        onPreviousImage={mockOnPreviousImage}
      />
    );
  });

  it("displays the modal once the ref is attached", () => {
    expect(mockShowModal).toHaveBeenCalled();
  });

  it("displays the image with the relevant attributes", () => {
    const image = screen.getByAltText("black Mercedes-Benz car");
    expect(image).toHaveAttribute(
      "src",
      "https://motorway-ui-test.s3.eu-west-2.amazonaws.com/car-images/YApS6TjKJ9c.jpg"
    );
  });

  it("displays the number of likes", () => {
    expect(screen.getByText(/❤️ 20/)).toBeInTheDocument();
  });

  it("displays the description", () => {
    expect(screen.getByText("Mercedes Benz AMG C63S")).toBeInTheDocument();
  });

  describe("when a next image is available and the user clicks the 'Next image' button", () => {
    it("calls the callback to display the next image", async () => {
      expect(mockOnNextImage).not.toHaveBeenCalled();

      await userEvent.click(screen.getByText("Next image"));

      expect(mockOnNextImage).toHaveBeenCalled();
    });
  });

  describe("when a previous image is available and the user clicks the 'Previous image' button", () => {
    it("calls the callback to display the previous image", async () => {
      expect(mockOnPreviousImage).not.toHaveBeenCalled();

      await userEvent.click(screen.getByText("Previous image"));

      expect(mockOnPreviousImage).toHaveBeenCalled();
    });
  });

  describe("when clicking the `Close Gallery View` button", () => {
    it("calls the callback to close the dialog modal", async () => {
      expect(mockCloseGalleryView).not.toHaveBeenCalled();

      await userEvent.click(screen.getByText("Close Gallery View"));

      expect(mockCloseGalleryView).toHaveBeenCalled();
    });
  });
});
