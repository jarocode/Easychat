import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import { AuthProvider } from "context/AuthContext";
import App from "./App";

describe("App component", () => {
  test("it renders", () => {
    render(
      <Provider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Provider>
    );
    // expect(screen.getAllByText("Welcome to EasyChats!")).toBeInTheDocument();
  });
});
