import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePage from "./HomePage";

describe("HomePage", () => {
  it("find all li", () => {
    render(<HomePage />);
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
  });
});
