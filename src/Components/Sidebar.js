import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return;

  return (
    <div className="shadow-xl p-5 w-48">
      <div>
        <ul>
          <li>Home</li>
          <li>Subscriptions</li>
          <li>Shorts</li>
          <li>Live</li>
        </ul>
        <h1 className="font-bold pt-4">Subscriptions</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
        <h1 className="font-bold pt-4">Explore</h1>
        <ul>
          <li>Trending</li>
          <li>Shoping</li>
          <li>Courses</li>
          <li>News</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
