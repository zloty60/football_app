import React from "react";
import ReactDOM from "react-dom";

import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core/styles";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./redux/rootReducer";

import "./index.css";
import theme from "./theme/theme";

import App from "./App";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
