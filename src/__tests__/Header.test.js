import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";

it("renders the header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );

  const loginBtn = screen.getByRole("button", { name: "Log in" });
  fireEvent.click(loginBtn);
  const logoutBtn = screen.getByRole("button", { name: "Log out" });
  expect(logoutBtn).toBeInTheDocument();
});
