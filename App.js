import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./Components/Login";
import ResetPasword from "./Components/ResetPasword";
import DownloadApp from "./Components/DownloadApp";
import Earn from "./Components/Earn";
import Support from "./Components/Support";
import GettingStarted from "./Components/GettingStarted";
import Blog from "./Components/Blog";
import CoinList from "./Components/CoinList";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import SecurityInsider from "./Components/SecurityInsider";
import AccountManangement from "./Components/AccountManangement";
import Bav from "./Components/Bav";
import Fraud from "./Components/Fraud";
import Kyc from "./Components/Kyc";
import Taxes from "./Components/Taxes";
import Trade from "./Components/Trade";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/academy" element={<Blog />} />
          <Route path="/more" element={<CoinList />} />
          <Route path="/earn" element={<Earn />} />
          <Route path="/support" element={<Support />} />
          <Route path="/support/gettingstarted" element={<GettingStarted />} />
          <Route path="/support/security" element={<SecurityInsider />} />
          <Route path="/support/account" element={<AccountManangement />} />
          <Route path="/support/verification" element={<Bav />} />
          <Route path="/support/suspicious" element={<Fraud />} />
          <Route path="/support/kyc" element={<Kyc />} />
          <Route path="/support/taxes" element={<Taxes />} />
          <Route path="/support/trade" element={<Trade />} />
          <Route path="/login" element={<Login type={"login"} />} />
          <Route path="/signup" element={<Login type={"signUp"} />} />
          <Route path="/login/reset-password" element={<ResetPasword />} />
          <Route path="/download" element={<DownloadApp />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
