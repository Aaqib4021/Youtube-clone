import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="overflow-auto scrollbar-hide space-x-4">
      <ButtonList />
      {/* <VideoContainer /> */}
    </div>
  );
};

export default MainContainer;
