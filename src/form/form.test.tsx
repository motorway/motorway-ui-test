import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./form";

describe("Form", () => {
  describe("when the user submits the form", () => {
    it("alerts the user of a successful form submission", async () => {
      jest.spyOn(window, "alert").mockImplementation(() => {});

      render(<Form />);

      await userEvent.type(
        screen.getByRole("textbox", { name: /Name/i }),
        "Nikhil"
      );

      await userEvent.type(
        screen.getByRole("textbox", { name: /Email/i }),
        "nikhil@my-email.com"
      );

      const dateInput = screen.getByRole("date-input", {
        name: /Date of birth/i,
      });

      await userEvent.click(dateInput);
      await userEvent.type(dateInput, "2000-01-01");
      await userEvent.tab();

      await userEvent.click(screen.getByRole("button"));

      expect(window.alert).toHaveBeenCalledWith(
        `Form submitted\nName: Nikhil\nDate of birth: 2000-01-01\nEmail: nikhil@my-email.com\nColour: #000000\nSalary: 50`
      );
    });
  });
});
