import React from "react";
import Navbar from "../../../Shared/Navbar/Navbar";
import Banner from "../../Home/Banner/Banner";
import Footer from "../Footer/Footer";
import ImageDrawer from "../ImageDrawer/ImageDrawer";
import Products from "../Products/Products";
import Reviews from "../Reviews/Reviews";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar></Navbar>
      <Banner></Banner>
      <Products></Products>
      <ImageDrawer></ImageDrawer>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;
