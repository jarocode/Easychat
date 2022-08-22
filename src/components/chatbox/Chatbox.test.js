import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import Chatbox from "./Chatbox";
import store from "store/store";
import { AuthProvider } from "context/AuthContext";

describe("chatbox component", () => {
  test("chatbox renders", () => {
    render(
      <Provider store={store}>
        <AuthProvider>
          <Chatbox message="chat message" time="chat time" />
        </AuthProvider>
      </Provider>
    );
  });
});
