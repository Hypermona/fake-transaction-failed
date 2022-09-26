import "./App.css";
import { Provider } from "react-redux";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Pays from "./Pages/Pays";
import Hero from "./components/Hero";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import UserDetails from "./Pages/UserDetails";
import ReceiverDetails from "./Pages/ReceiverDetails";
import Errors from "./Pages/Errors";
import Payment from "./components/gpay/Payment";
import Receivers from "./Pages/Receivers";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="errors" element={<Errors />} />

            <Route path="receivers/:id" element={<ReceiverDetails />} />
            <Route path="user" element={<UserDetails />} />

            <Route path="/" element={<Hero />} />
            <Route path="pays" element={<Pays />} />
            <Route path="payment" element={<Payment />} />
            <Route path="receivers" element={<Receivers />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
