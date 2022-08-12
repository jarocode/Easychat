import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/styles";

import ChatRoom from "pages/chatroom";
import Auth from "pages/auth";
import store from "store/store";

const theme = createTheme({
  typography: {
    fontFamily: ["Raleway", "sans-serif"].join(","),
  },
});

const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
