import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("Should match snapshot", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
