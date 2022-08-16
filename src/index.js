import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "store/store";
import { AuthProvider } from "context/AuthContext";
import { addAllChats } from "store/actions/chat";
import { saveState } from "utils";

window.onbeforeunload = () => {
  // if (store.getState().auth.userId) {
  // saveState(store.getState());
  // }
};

window.addEventListener("storage", (event) => {
  if (event.storageArea !== localStorage) return;
  if (event.key === "state") {
    let chat = JSON.parse(event.newValue).chat;
    if (chat) {
      console.log("newValue", chat);
      store.dispatch(addAllChats(JSON.parse(event.newValue).chat));
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
