import Contact from "../components/Contact";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

test("Contact form submission - renders all form fields", () => {
  render(<Contact />);

  // Check main heading
  const heading = screen.getByRole("heading", { level: 1 });
  expect(heading).toBeInTheDocument();
  expect(heading).toHaveTextContent("Contact Us");

  // Check all form fields are present
  expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();

  // Check submit button
  expect(
    screen.getByRole("button", { name: /Send Message/i }),
  ).toBeInTheDocument();
});

test("Contact form - displays contact information", () => {
  render(<Contact />);

  expect(screen.getByText(/support@namastereact.com/i)).toBeInTheDocument();
  expect(screen.getByText(/\+91 9876543210/i)).toBeInTheDocument();
  expect(screen.getByText(/New Delhi, India/i)).toBeInTheDocument();
});

test("Should load button inside contact page", () => {
  render(<Contact />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});
test("Should load button inside contact page", () => {
  render(<Contact />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});
