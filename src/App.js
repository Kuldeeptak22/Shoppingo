import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Products from "./components/Header/Products/Products";
import Blog from "./components/Header/Blog/Blog";
import Contactus from "./components/Header/Contactus/Contactus";
import Men from "./components/Header/Products/Men/Men";
import Women from "./components/Header/Products/Women/Women";
import Kids from "./components/Header/Products/Kids/Kids";
import Myaccount from "./components/Header/Shop/Myaccount/Myaccount";
import Wishlist from "./components/Header/Shop/Wishlist/Wishlist";
import PageNotFound from "./components/PagenotFound/PageNotFound";
import Others from "./components/Header/Products/Others/Others";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/myaccount" element={<Myaccount />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/others" element={<Others />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
