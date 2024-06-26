import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NotFound from "./NotFound";
import UserList from "./User/UserList";
import Login from "./User/Login";
import ProductList from "./Product/ProductList";
import ProductDetail from "./Product/ProductDetail";
import NewProduct from "./Product/NewProduct";
import Signup from "./User/Signup";

function MainApp() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/products/new" element={<NewProduct/>}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default MainApp;
