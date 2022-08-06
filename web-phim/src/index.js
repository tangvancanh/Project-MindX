import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./Components/ThemeContext/ThemeContext";
// import { Provider } from "react-redux";
// import store from "./Components/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      {/* <Provider store={store}> */}
        <App />
      {/* </Provider> */}
    </ThemeProvider>
  </React.StrictMode>
);
