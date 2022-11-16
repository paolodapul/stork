import { render, screen } from "@testing-library/react";
import { Home } from "./Home";

describe("Home page", () => {
  it("should render the home page", () => {
    render(<Home />);
    expect(screen.getByText("Home page")).toBeInTheDocument();
  });
});
