import React from "react";

const VideoDesc = ({ title, overview }) => {
  return (
    <div className="absolute z-10 top-20 w-screen h-screen aspect-video text-white pt-36 px-12 bg-gradient-to-r from-black">
      <div>
        <h1 className="text-6xl font-bold">{title}</h1>
      </div>
      <div className="py-6 text-lg w-1/4">{overview}</div>
    </div>
  );
};

export default VideoDesc;
