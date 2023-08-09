import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { HashRouter, BrowserRouter as HistoryRouter } from "react-router-dom";
import store from "./store";
import App from "./App";
import "./index.scss";

const rootNode = document.getElementById("root");

if (rootNode) {
  createRoot(rootNode).render(
    <StrictMode>
      <Provider store={store}>
        <HashRouter basename="/">
          <App />
        </HashRouter>
      </Provider>
    </StrictMode>
  );
} else {
  console.error("rootNode is NULL!!");
}
