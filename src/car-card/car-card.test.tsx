import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CarCard from "./car-card";

describe("CarCard", () => {
  const mockOpenInGalleryView = jest.fn();

  beforeEach(() => {
    render(
      <CarCard
        imageUrl="https://motorway-ui-test.s3.eu-west-2.amazonaws.com/car-images/YApS6TjKJ9c"
        imageColor="#F8B700"
        userFullName="Jack box"
        profileImage="https://motorway-ui-test.s3.eu-west-2.amazonaws.com/avatars/thanos"
        altDescription="black Mercedes-Benz car"
        userTotalLikes={100}
        userTotalPhotos={15}
        openInGalleryView={mockOpenInGalleryView}
      />
    );
  });

  it("displays the image with the relevant attributes", () => {
    const image = screen.getByAltText("black Mercedes-Benz car");
    expect(image).toHaveAttribute(
      "src",
      "https://motorway-ui-test.s3.eu-west-2.amazonaws.com/car-images/YApS6TjKJ9c.jpg"
    );
  });

  it("styles the cards top and bottom border with the image color", () => {
    expect(screen.getByRole("card")).toHaveStyle({
      "border-top-color": "#F8B700",
      "border-bottom-color": "#F8B700",
    });
  });

  it("displays the users total likes", () => {
    expect(screen.getByText("Total number of likes: 100")).toBeVisible();
  });

  it("displays the users total photos", () => {
    expect(screen.getByText("Total number of photos: 15")).toBeVisible();
  });

  describe("when the user clicks the `Open in Gallery View` button", () => {
    it("calls the callback to display the image in the gallery view", async () => {
      expect(mockOpenInGalleryView).not.toHaveBeenCalled();

      await userEvent.click(screen.getByText("Open in Gallery View"));

      expect(mockOpenInGalleryView).toHaveBeenCalled();
    });
  });
});
