import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CarPage from "./car-page";
import type { CarImage } from "../types/image";

describe("CarPage", () => {
  const images: CarImage[] = [
    {
      id: "m3m-lnR90uM",
      created_at: "2017-04-14T00:59:12-04:00",
      updated_at: "2020-04-14T01:05:34-04:00",
      color: "#E0E4EF",
      description: "my first car description",
      alt_description: "white car",
      categories: [],
      likes: 995,
      user: {
        id: "9aTMQdp_Djo",
        updated_at: "2020-04-20T01:34:56-04:00",
        username: "peterbroomfield",
        name: "Peter Broomfield",
        first_name: "Peter",
        last_name: "Broomfield",
        bio: "Some days you get the bear, and some days the bear gets you. Maybe if we felt any human loss as keenly as we feel one of those close to us, human history would be far less bloody.",
        location: "Baltimore, MD",
        profile_image:
          "https://motorway-ui-test.s3.eu-west-2.amazonaws.com/avatars/warmachine",
        total_collections: 36,
        total_likes: 126,
        total_photos: 1,
      },
      url: "https://motorway-ui-test.s3.eu-west-2.amazonaws.com/car-images/m3m-lnR90uM",
    },
    {
      id: "oUBjd22gF6w",
      created_at: "2018-05-06T08:17:17-04:00",
      updated_at: "2020-04-14T01:07:44-04:00",
      color: "#F58313",
      description: "Some description of a car",
      alt_description: "orange Lamborghini car",
      categories: [],
      likes: 463,
      user: {
        id: "BXNy-9HI7Qk",
        updated_at: "2020-04-15T16:16:12-04:00",
        username: "marcusp",
        name: "Marcus P.",
        first_name: "Marcus",
        last_name: "P.",
        bio: "They were just sucked into space.",
        location: null,
        profile_image:
          "https://motorway-ui-test.s3.eu-west-2.amazonaws.com/avatars/thanos",
        total_collections: 0,
        total_likes: 210,
        total_photos: 80,
      },
      url: "https://motorway-ui-test.s3.eu-west-2.amazonaws.com/car-images/oUBjd22gF6w",
    },
    {
      id: "YApS6TjKJ9c",
      created_at: "2017-12-26T14:28:36-05:00",
      updated_at: "2020-04-14T01:02:23-04:00",
      color: "#F8B700",
      description: "Mercedes Benz AMG C63S",
      alt_description: "black Mercedes-Benz car",
      categories: [],
      likes: 682,
      user: {
        id: "nuKDH32RDaA",
        updated_at: "2020-04-18T12:34:03-04:00",
        username: "dhivakrishna",
        name: "Dhiva Krishna",
        first_name: "Dhiva",
        last_name: "Krishna",
        bio: "Earl Grey tea, watercress sandwiches... and Bularian canapÃƒÂ©s? Are you up for promotion?",
        location: null,
        profile_image:
          "https://motorway-ui-test.s3.eu-west-2.amazonaws.com/avatars/thanos",
        total_collections: 0,
        total_likes: 6,
        total_photos: 8,
      },
      url: "https://motorway-ui-test.s3.eu-west-2.amazonaws.com/car-images/YApS6TjKJ9c",
    },
  ];

  it("displays a car card for each image", () => {
    render(<CarPage images={images} />);

    expect(screen.getByAltText("white car")).toBeVisible();
    expect(screen.getByAltText("orange Lamborghini car")).toBeVisible();
    expect(screen.getByAltText("black Mercedes-Benz car")).toBeVisible();
  });

  describe("when a car card is opened in the gallery view", () => {
    beforeAll(() => {
      /**
       * I chose to use a dialog to display the modal as it's far more accessible, prevents interaction with
       * the content behind and the keyboard navigation automatically focuses onto the content in the modal.
       *
       * Unfortunately JSDOM doesn't support dialog modals just yet so I've had to mock the `showModal` function.
       */
      HTMLDialogElement.prototype.showModal = jest.fn();
    });

    it("displays the gallery view modal", async () => {
      render(<CarPage images={images} />);

      expect(
        screen.queryByText("my first car description")
      ).not.toBeInTheDocument();

      await userEvent.click(
        screen.getAllByRole("button", { name: "Open in Gallery View" })[0]
      );

      expect(screen.getByText("my first car description")).toBeInTheDocument();
    });

    describe('when clicking the "Next image" button', () => {
      it("displays the next image", async () => {
        render(<CarPage images={images} />);

        expect(
          screen.queryByText("my first car description")
        ).not.toBeInTheDocument();

        await userEvent.click(
          screen.getAllByRole("button", { name: "Open in Gallery View" })[0]
        );

        expect(
          screen.getByText("my first car description")
        ).toBeInTheDocument();

        await userEvent.click(screen.getByText("Next image"));

        expect(
          screen.queryByText("my first car description")
        ).not.toBeInTheDocument();

        expect(
          screen.getByText("Some description of a car")
        ).toBeInTheDocument();
      });
    });

    describe('when clicking the "Previous image" button', () => {
      it("displays the previous image", async () => {
        render(<CarPage images={images} />);

        expect(
          screen.queryByText("Some description of a car")
        ).not.toBeInTheDocument();

        await userEvent.click(
          screen.getAllByRole("button", { name: "Open in Gallery View" })[1]
        );

        expect(
          screen.getByText("Some description of a car")
        ).toBeInTheDocument();

        await userEvent.click(screen.getByText("Previous image"));

        expect(
          screen.queryByText("Some description of a car")
        ).not.toBeInTheDocument();

        expect(
          screen.getByText("my first car description")
        ).toBeInTheDocument();
      });
    });

    describe("when there is no next image", () => {
      it("hides the 'Next image' button", async () => {
        render(<CarPage images={images} />);

        await userEvent.click(
          screen.getAllByRole("button", { name: "Open in Gallery View" })[1]
        );

        expect(screen.getByText("Next image")).toBeInTheDocument();

        await userEvent.click(screen.getByText("Next image"));

        expect(screen.queryByText("Next image")).not.toBeInTheDocument();
      });
    });

    describe("when there is no previous image", () => {
      it("hides the 'Previous image' button", async () => {
        render(<CarPage images={images} />);

        await userEvent.click(
          screen.getAllByRole("button", { name: "Open in Gallery View" })[1]
        );

        expect(screen.getByText("Previous image")).toBeInTheDocument();

        await userEvent.click(screen.getByText("Previous image"));

        expect(screen.queryByText("Previous image")).not.toBeInTheDocument();
      });
    });
  });
});
