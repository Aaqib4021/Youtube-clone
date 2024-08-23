import React from "react";
import Button from "./Button";

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
    <div className="flex overflow-x-scroll">
      {textList.map((button) => (
        <Button text={button} />
      ))}
    </div>
  );
};

export default ButtonList;
