import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import LandingPage from './Components/LandingPage'; // Adjust this import based on your component structure
import Register from './Components/Register';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import AddItem from './Components/AddItem';
import UserItems from './Components/UserItems';
import '@fortawesome/fontawesome-svg-core/styles.css';
import AuctionItems from './Components/AuctionItems';
import Cart from './Components/Cart';
import Profile from './Components/Profile';
import ContactUs from './Components/ContactUs';
import PrivacyPolicy from './Components/PrivacyPolicy';
import ViewItems from './Components/ViewItems';


const App = () => {
  return (
    <Router>
      <div className="App d-flex flex-column min-vh-100">
        {/* <Header /> */}
        <main className="flex-grow-1">
          <Routes>
            {/* <Route path="/" element={<><LandingPage /><Footer/></>} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<><Header /><Dashboard/><Footer/></>} />
            <Route path="/addItem"element={<><Header /><AddItem/><Footer/></>} />
            <Route path="/user-items" element={<><Header /><UserItems/><Footer/></>} />
            <Route path="/auction-items" element={<><Header /><AuctionItems/><Footer/></>} />
            <Route path="/cart" element={<><Header /><Cart/><Footer/></>} />
            <Route path="/profile"element={<><Header /><Profile/><Footer/></>} />
            <Route path="/contact-us" element={<><Header /><ContactUs/><Footer/></>} />
            <Route path="/privacy-policy"element={<><Header /><PrivacyPolicy/><Footer/></>} />
            <Route path="/view-items" element={<><Header /><ViewItems/><Footer/></>} /> */}
            <Route path="/" element={<><LandingPage /><Footer/></>} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<><Header /><Dashboard/></>} />
            <Route path="/addItem"element={<><Header /><AddItem/></>} />
            <Route path="/user-items" element={<><Header /><UserItems/></>} />
            <Route path="/auction-items" element={<><Header /><AuctionItems/></>} />
            <Route path="/cart" element={<><Header /><Cart/></>} />
            <Route path="/profile"element={<><Header /><Profile/></>} />
            <Route path="/contact-us" element={<><Header /><ContactUs/></>} />
            <Route path="/privacy-policy"element={<><Header /><PrivacyPolicy/></>} />
            <Route path="/view-items" element={<><Header /><ViewItems/></>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
