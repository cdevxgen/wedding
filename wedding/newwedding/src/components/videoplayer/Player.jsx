
"use client"

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/file"), { ssr: false });

const Player = ({ light = false, url, cover }) => {
  const [shouldPlay, setShouldPlay] = useState(false);

  useEffect(() => {
    setShouldPlay(true);
  }, []);

  return (
    <ReactPlayer
      playing={shouldPlay}
      light={light ? cover : false}
      
      url={url}
      config={{
        attributes: {
          poster: cover,
          style: {
            objectFit: "cover",
            height: "100%",
            width: "100%",
          },
        },
      }}
      height="100%"
      width="100%"
      style={{ objectFit: "cover" }}
      controls
    />
  );
};

export default Player;
