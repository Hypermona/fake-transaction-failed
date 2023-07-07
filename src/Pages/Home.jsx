import Header from "../components/Header";
import Footer from "../components/Footer";
import Pays from "./Pays";
import Hero from "../components/Hero";
import UserDetails from "./UserDetails";
import ReceiverDetails from "./ReceiverDetails";
import Errors from "./Errors";
import Payment from "../components/gpay/Payment";
import Receivers from "./Receivers";
import { Routes, Route } from "react-router-dom";
import Transaction from "../components/gpay/Transaction";

function Home() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />}></Route>
        <Route path="errors" element={<Errors />} />
        <Route path="receivers/:id" element={<ReceiverDetails />} />
        <Route path="user" element={<UserDetails />} />
        <Route path="pays" element={<Pays />} />
        <Route path="payment" element={<Payment />} />
        <Route path="receivers" element={<Receivers />} />
        <Route path="transaction" element={<Transaction />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default Home;
