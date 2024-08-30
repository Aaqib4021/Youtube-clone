import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { SEARCH_API } from "../Utils/Constants";
import { cacheResults } from "../Utils/searchSlice";
import { Link } from "react-router-dom";
import { addText } from "../Utils/resultSlice";

const Head = () => {
  const [sugview, setsugview] = useState(false);
  const [searhQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestion] = useState([]);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  const handleSidebarClick = () => {
    dispatch(toggleMenu());
  };

  const getSearchSuggestions = async () => {
    const search = await fetch(SEARCH_API + searhQuery);
    const data = await search.json();
    setSuggestion(data[1]);
    dispatch(
      cacheResults({
        [searhQuery]: data[1],
      })
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searhQuery]) {
        setSuggestion(searchCache[searhQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searhQuery]);

  const handleSugClick = (sug) => {
    dispatch(addText(sug));
    setSearchQuery(sug);
  };
  return (
    <div className="grid grid-flow-col p-4 bg-white z-20 fixed w-full ">
      <div className="flex col-span-1">
        <img
          src="https://www.iconbolt.com/preview/facebook/zwicon/hamburger-menu.svg"
          alt="menu-logo"
          className="h-12 cursor-pointer"
          onClick={handleSidebarClick}
        />
        <Link to="/">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo-2017-present.jpg"
            alt="youtube-logo"
            className="h-12"
          />
        </Link>
      </div>
      <div className="col-span-10 ml-44">
        <div>
          <input
            type="text"
            placeholder="Search"
            className="w-7/12 border-t border-l border-b border-gray-500 rounded-s-3xl py-2 pl-4"
            value={searhQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => {
              setsugview(true);
            }}
            onBlur={() => {
              setTimeout(() => {
                setsugview(false);
              }, 100);
            }}
          />
          <button className="px-4 py-2 bg-gray-400 rounded-e-3xl border border-gray-500 text-white font-semibold ">
            Search
          </button>
        </div>
        {sugview && (
          <div>
            <div className="absolute border border-gray-300 bg-white w-[40rem] py-5 px-3 rounded-xl">
              <ul>
                {suggestions.map((sug) => (
                  <Link to="/results" key={sug}>
                    <li
                      className="hover:bg-gray-300 px-2 py-2"
                      onClick={() => {
                        handleSugClick(sug);
                      }}
                    >
                      {sug}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
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
