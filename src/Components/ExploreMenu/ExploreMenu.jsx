import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        Dive into a world of deliciousness! From sizzling street food to
        wholesome home-style meals, our menu offers something for every craving.
        Discover fresh flavors, regional specialties, and quick bites, all
        delivered hot to your doorstep. Your next favorite dish is just a click
        away—start exploring now!
      </p>
      <div className="explore-menu-list">
        {
            menu_list.map((item, index) => {
                return (
                    <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} className="explore-menu-list-item" key={index}>
                    <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                    </div>
                );
            })
        }
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
