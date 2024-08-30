import React, { useEffect, useState } from "react";
import ButtonList from "./ButtonList";
import { GOOGLE_API_KEY } from "../Utils/Constants";
import Result from "./Result";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const ResultsList = () => {
  const suggestion = useSelector((store) => store.result.text);
  const [resVideos, setresVideos] = useState([]);
  const fetchResults = async () => {
    const jsonData = await fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" +
        suggestion +
        "&key=" +
        GOOGLE_API_KEY
    );
    const data = await jsonData.json();
    setresVideos(data.items);
  };
  useEffect(() => {
    fetchResults();
  }, []);
  if (resVideos.length === 0) return;
  return (
    <div className="flex flex-col">
      <div>
        {" "}
        <ButtonList />
      </div>
      {resVideos.length > 0 &&
        resVideos.map((vid) => (
          <Link to={"/watch?v=" + vid.id.videoId} key={vid.etag}>
            <Result data={vid} />{" "}
          </Link>
        ))}
    </div>
  );
};
export default ResultsList;
