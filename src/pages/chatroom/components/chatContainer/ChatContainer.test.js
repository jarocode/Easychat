import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import { AuthProvider } from "context/AuthContext";
import store from "store/store";
import ChatContainer from "./ChatContainer";

describe("chatContainer component", () => {
  it("chatContainer renders", () => {
    render(
      <Provider store={store}>
        <AuthProvider>
          <ChatContainer />
        </AuthProvider>
      </Provider>
    );
  });
});
