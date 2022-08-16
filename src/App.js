import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/styles";

import ChatRoom from "pages/chatroom";
import Auth from "pages/auth";
import { AuthContext } from "context/AuthContext";

const theme = createTheme({
  typography: {
    fontFamily: ["Raleway", "sans-serif"].join(","),
  },
});

const App = () => {
  const { loggedInUser } = useContext(AuthContext);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Router>
          <Routes>
            <Route path="/" exact element={<Auth />} />
            <Route
              path="/chatroom"
              exact
              element={
                loggedInUser ? <ChatRoom /> : <Navigate replace to="/" />
              }
            />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
