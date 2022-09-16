import "./App.css";
import { Provider } from "react-redux";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Pays from "./Pages/Pays";
import Hero from "./components/Hero";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Header />
          <Hero />
          <Pays />
          <Footer />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
