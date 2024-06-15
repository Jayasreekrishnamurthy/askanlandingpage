import React from "react";
import "./videopart.css";
import Videocontent from "./videocontent";

const Videopart = () => {
  return (
    <div className="videopartbg">
      <div className="videopart">
        <video width="400" controls>
          <source src="mov_bbb.mp4" type="video/mp4" />
        </video>
      </div>
      <Videocontent />
    </div>
  );
};

export default Videopart;
