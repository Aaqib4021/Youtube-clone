import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return;

  return (
    <div className="px-12 w-[200px] h-screen fixed mt-24 ">
      <div>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
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
        <hr></hr>
        <ul>
          <li>Setting</li>
          <li>Report History</li>
          <li>Help</li>
          <li>Send Feedback</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
