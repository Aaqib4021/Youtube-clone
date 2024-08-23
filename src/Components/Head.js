import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const handleSidebarClick = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-4">
      <div className="flex col-span-1">
        <img
          src="https://www.iconbolt.com/preview/facebook/zwicon/hamburger-menu.svg"
          alt="menu-logo"
          className="h-12 cursor-pointer"
          onClick={handleSidebarClick}
        />
        <img
          src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo-2017-present.jpg"
          alt="youtube-logo"
          className="h-12"
        />
      </div>
      <div className="col-span-10 ml-44">
        <input
          type="text"
          placeholder="Search"
          className="w-7/12 border border-gray-500 rounded-s-3xl py-2 pl-4"
        />
        <button className="px-4 py-2 bg-gray-700 rounded-e-3xl border border-gray-500 text-white font-semibold ">
          Search
        </button>
      </div>
      <div className="col-span-1">
        <img
          src="https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg"
          alt="user"
          className="h-8"
        />
      </div>
    </div>
  );
};

export default Head;
