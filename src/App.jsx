import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import MainApp from "./MainApp";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <MainApp />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;