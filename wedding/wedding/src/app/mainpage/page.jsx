import Vcontent from "@/components/vcontent/Vcontent";
import VideoPlay from "@/components/video/VideoPlay";
import React from "react";
import Count from "@/components/countdown/Count";
import Featured from "../../components/slides/Featured";
import FirstPart from "../../components/firstpart/FirstPart";
import Included from "../../components/cards/Included"
import Services from "../../components/services/Services"
import MapCard from "@/components/mapsection/MapCard";
import Footerr from "@/components/last/Footerr";
import Gallery from "@/components/gallery/Gallery";

const MainPage = () => {
  return (
    <div className="overflow-hidden">
      <VideoPlay />
      <Vcontent />
      <Featured />
      <FirstPart heading="Our Happy Movements" />
      <Gallery />
      <Services />
      <Included />
      <MapCard />
      <Count />
      <Footerr />
    </div>
  );
};

export default MainPage;
