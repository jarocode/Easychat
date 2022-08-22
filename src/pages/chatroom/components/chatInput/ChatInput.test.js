import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import { AuthProvider } from "context/AuthContext";
import store from "store/store";
import ChatInput from "./ChatInput";

describe("chatInput component", () => {
  it("chatInput renders", () => {
    render(
      <Provider store={store}>
        <AuthProvider>
          <ChatInput />
        </AuthProvider>
      </Provider>
    );
  });
});
