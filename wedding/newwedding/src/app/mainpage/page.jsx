import Included from "@/components/cards/Included";
import Count from "@/components/countdown/Count";
import FirstPart from "@/components/firstpart/FirstPart";
import Gallery from "@/components/gallery/Gallery";
import InvitationSection from "@/components/invitationSection/InvitationSection";
import Footerr from "@/components/last/Footerr";
import MapCard from "@/components/mapsection/MapCard";
import Featured from "@/components/slides/Featured";
import React from "react";
import dynamic from "next/dynamic";

const Player = dynamic(() => import("../../components/videoplayer/Player"));

const MainPage = () => {
  return (
    <>
      <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg bg-black">
        <Player light url="/mainvideo.mp4" />
      </div>
      <InvitationSection />
      <FirstPart heading="Our Happy Movements" />
      <Featured />
      
      <Gallery />
      <Included />
      <MapCard />
      <Count />
      <Footerr />
    </>
  );
};

export default MainPage;
