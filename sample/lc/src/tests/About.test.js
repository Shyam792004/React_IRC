import { render, screen } from "@testing-library/react";
import About from '../pages/About'
test("test_About1", () => {
  render(<About/>)
  const tabout = screen.getByText(/ShyamSundhar/i);
  expect(tabout).toBeInTheDocument();
});
test("test_About2", () => {
  render(<About />);
  const tabout2 = screen.getByText(/727822tucs219/i);
  expect(tabout2).toBeInTheDocument();
});