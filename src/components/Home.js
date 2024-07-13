import React from "react";
import { Link } from "react-router-dom";
import bannerImage from "../assets/banneryeni.jpg";
import "../styles/Home.css"

export const Home = () => {
  return (
    <div
      className="mainPage"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="order">
        <Link to="/menu">
          <button>SİPARİŞ VER</button>
        </Link>
      </div>
    </div>
  );
};
