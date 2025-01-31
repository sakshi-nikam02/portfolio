import { render, screen } from '@testing-library/react'; // Import screen
import Home from './Home';

describe("Home Component", () => {
  it("should display header", () => {
    render(<Home />);
    const headerElement = screen.getByTestId("headerText"); // Now screen.getByTestId will work
    expect(headerElement).toBeInTheDocument(); // Check if the element exists
  });
});
