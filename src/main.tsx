import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";

import App from "./App.tsx";
import { theme } from "./assets/styles/theme.ts";
import store, { persistor } from "./redux/store.ts";

import "react-toastify/dist/ReactToastify.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeProvider theme={theme}>
            <App />
            <ToastContainer />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
