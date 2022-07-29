import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import List from "./List";

const listData = ["Anna", "32"];

describe("List component", () => {
  test("List renders", () => {
    render(<List />);
    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
  });
  test("List renders with data", () => {
    render(<List listData={listData} />);
    const listItem = screen.getByText("Anna");
    expect(listItem).toBeInTheDocument();
  });
});
