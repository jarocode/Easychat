import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/styles";

import ChatRoom from "pages/chatroom";
import Auth from "pages/auth";

const theme = createTheme({
  typography: {
    fontFamily: ["Raleway", "sans-serif"].join(","),
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Router>
          <Routes>
            <Route path="/" exact element={<Auth />} />
            <Route path="/chatroom" exact element={<ChatRoom />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
