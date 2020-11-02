import React from "react";
import { render, screen } from "@testing-library/react";
import Image from ".";

describe("Atoms: Images", () => {
  let props;
  let component;
  beforeEach(() => {
    props = { url: "fakeUrl", image: "fakeImageUrl" };
    component = render(<Image {...props} />);
  });
  it("Should match snapshot", () => {
    expect(component.asFragment()).toMatchSnapshot();
  });
  it("Should contain required amount of image elements", async () => {
    const images = await screen.findAllByRole("img");
    const got = images.length;
    const expected = 2;
    expect(got).toEqual(expected);
  });
});
