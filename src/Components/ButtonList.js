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
  "ew",
  "ahgiuhuhgurhgujfdhg",
  "jagjnrjgjkfdsgjjf",
  "jkgbfjbabfgiu",
];
const ButtonList = () => {
  return (
    <div className="flex overflow-x-scroll scrollbar-hide">
      {textList.map((button) => (
        <Button text={button} key={button} />
      ))}
    </div>
  );
};

export default ButtonList;
