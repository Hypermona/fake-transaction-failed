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

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div>
          {/* <Header /> */}
          {/* <Errors /> */}
          {/* <ReceiverDetails /> */}
          {/* <UserDetails /> */}
          {/* <Hero /> */}
          {/* <Pays /> */}
          {/* <Payment /> */}
          <Receivers />
          {/* <Footer /> */}
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
