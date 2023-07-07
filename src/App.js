import "./App.css";
import { Provider } from "react-redux";

import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import MobileWindow from "./components/MobileWindow";
import checkMobile from "./Constants/checkMobile";
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          {checkMobile() ? (
            <Home />
          ) : (
            <MobileWindow>
              <Home />
            </MobileWindow>
          )}
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
