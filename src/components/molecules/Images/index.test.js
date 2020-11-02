import React from "react";
import { render, screen } from "@testing-library/react";
import Images from ".";

jest.mock("../../atoms/Image", () => {
  const stubText = "fake image";
  return () => <div> {stubText}</div>;
});

describe("Molecules: Images", () => {
  let props;
  let component;
  beforeEach(() => {
    props = {
      images: [
        {
          id: "sampleId0",
          url: "sampleUrl0",
          user: { profile_image: "sampleImage0" },
        },
        {
          id: "sampleId1",
          url: "sampleUrl1",
          user: { profile_image: "sampleImage1" },
        },
      ],
    };
    component = render(<Images {...props} />);
  });
  it("Should match snapshot", () => {
    expect(component.asFragment()).toMatchSnapshot();
  });
  it("Should contain required amount of image elements", async () => {
    const images = await screen.findAllByText("fake image");
    const expected = 2;
    expect(images.length).toEqual(expected);
  });
});
