import React from "react";
import Button from "./Button";
import "../Components/scrollbar.css";

const textList = [
  "All",
  "Programming",
  "Music",
  "Podcast",
  "Cricket",
  "News",
  "Cooking",
  "Valentine",
  "Shoping",
  "Food",
  "Comedy",
  "Law",
  "Camping",
  "Entertainment",
  "cr7",
  "Development",
  "Java",
  "Cotlin",
];
const ButtonList = () => {
  return (
    <div className="flex overflow-x-scroll scrollbar-hide fixed py-4 bg-white mt-[-16px] ">
      {textList.map((button) => (
        <Button text={button} key={button} />
      ))}
    </div>
  );
};

export default ButtonList;
