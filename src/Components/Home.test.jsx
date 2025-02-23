import { render, screen } from '@testing-library/react'; // Import screen
import Home from './Home';

describe("Home Component", () => {
  it("should display header", () => {
    render(<Home />);
    const headerElement = screen.getByTestId("headerText"); 
    expect(headerElement).toBeInTheDocument();
  });
});
