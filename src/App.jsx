import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import MainApp from "./MainApp";
import Footer from "./Footer";
import UserContext from "./context/UserContext";

const App = () => {
  const [isLoggedin, setLoggedin] = useState(() => {
    return localStorage.getItem('token') ? true : false;
  });
// Fixed Issue: When reloading the page, Logout button was getting disappeared
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setLoggedin(true);
    } else {
      setLoggedin(false);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <BrowserRouter>
        <UserContext.Provider value={{ isLoggedin, setLoggedin }}>
          <Header />
          <MainApp />
          <Footer />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
