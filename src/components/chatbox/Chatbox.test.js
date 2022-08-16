import { render, screen } from "@testing-library/react";

import Chatbox from "./Chatbox";

describe("chatbox component", () => {
  test("chatbox renders", () => {
    render(<Chatbox />);
  });
});
