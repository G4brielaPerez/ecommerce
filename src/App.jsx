import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/header/Header"
import NavBar from "./components/navbar/NavBar"
import Home from "./components/Home"
import Shop from "./components/Shop"
import AboutUs from "./components/AboutUs"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"
import ViewProduct from "./components/products/ViewProduct"
import Login from "./components/Login"
import Register from "./components/Register"
import Account from "./components/Account"
import Checkout from "./components/Checkout"
import ManageAccount from "./components/profile/ManageAccount"
import ProfileInfo from "./components/profile/ProfileInfo"
import Wishlist from "./components/profile/Wishlist"
import Cart from "./components/Cart"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/viewProduct" element={<ViewProduct />} />
          <Route path="/account" element={<Account />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/manageAccount" element={<ManageAccount />} />
          <Route path="/profileInfo" element={<ProfileInfo />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
