import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import { AuthProvider } from "context/AuthContext";
import store from "store/store";
import ChatSection from "./ChatSection";

describe("chatSection component", () => {
  it("chatSection renders", () => {
    render(
      <Provider store={store}>
        <AuthProvider>
          <ChatSection />
        </AuthProvider>
      </Provider>
    );
  });
});
