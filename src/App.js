import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Products from "./components/Header/Products/Products";
import Blog from "./components/Header/Blog/Blog";
import Contactus from "./components/Header/Contactus/Contactus";
import Cloths from "./components/Header/Products/Cloths/Cloths";
import Myaccount from "./components/Header/Shop/Myaccount/Myaccount";
import Wishlist from "./components/Header/Shop/Wishlist/Wishlist";
import PageNotFound from "./components/PagenotFound/PageNotFound";
import Others from "./components/Header/Products/Others/Others";
import SingleProduct from "./components/Header/Products/SingleProduct/SingleProduct";
import Food from "./components/Header/Products/Food/Food";
import SingleRecipe from "./components/Header/Products/SingleRecipe/SingleRecipe";
import SingleCloth from "./components/Header/Products/SingleCloth/SingleCloth";

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
          <Route path="/cloths" element={<Cloths />} />
          <Route path="/myaccount" element={<Myaccount />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/others" element={<Others />} />
          <Route path="/food" element={<Food />} />
          <Route path="/product/:productId" element={<SingleProduct />} />
          <Route path="/recipe/:RecipeId" element={<SingleRecipe />} />
          <Route path="/cloths/:clothId" element={<SingleCloth />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
