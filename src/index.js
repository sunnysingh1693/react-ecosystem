import React from "react";
import { createRoot } from "react-dom/client";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";
import { Provider } from "react-redux";
import { configureStore } from "./store";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
const store = configureStore();
const persistor = persistStore(store);
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={<div>Loading...</div>}>
      <App tab="home" />
    </PersistGate>
  </Provider>
);
