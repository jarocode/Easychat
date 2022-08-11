import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ChatRoom from "pages/chatroom";
import Auth from "pages/auth";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Auth />} />
          <Route path="/chatroom" exact element={<ChatRoom />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
