import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { SEARCH_API } from "../Utils/Constants";

const Head = () => {
  const [searhQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestion] = useState([]);
  //   console.log(searhQuery);
  const dispatch = useDispatch();
  const handleSidebarClick = () => {
    dispatch(toggleMenu());
  };

  const getSearchSuggestions = async () => {
    const search = await fetch(SEARCH_API + searhQuery);
    const data = await search.json();
    setSuggestion(data[1]);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchSuggestions();
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searhQuery]);

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
        <div>
          <input
            type="text"
            placeholder="Search"
            className="w-7/12 border-t border-l border-b border-gray-500 rounded-s-3xl py-2 pl-4"
            value={searhQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="px-4 py-2 bg-gray-400 rounded-e-3xl border border-gray-500 text-white font-semibold ">
            Search
          </button>
        </div>
        {suggestions.length > 0 && (
          <div className="absolute border border-gray-300 bg-white w-[40rem] py-5 px-3 rounded-xl">
            <ul>
              {suggestions.map((sug) => (
                <li key={sug} className="hover:bg-gray-300 px-2 py-2">
                  🔍 {sug}
                </li>
              ))}
            </ul>
          </div>
        )}
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
