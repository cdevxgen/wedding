"use client";

import { useEffect, useState } from "react";

const Player = ({ light = false, url, cover }) => {
  const [shouldPlay, setShouldPlay] = useState(false);

  useEffect(() => {
    setShouldPlay(true);
  }, []);

  return (
    <video
      width="100%"
      height="100%"
      controls
      poster={light ? cover : null}
      autoPlay={shouldPlay}
      style={{ objectFit: "cover" }}
    >
      <source src={url} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Player;
