"use client"

import React from "react";

const FirstPart = ({ heading, img }) => {
  return (
    <div
      className="flex items-center justify-center md:h-screen h-[200px] mb-0 bg-fixed md:bg-center bg-top md:bg-cover bg-contain bg-[url('/assets/slide/ring.jpg')]"
    >
      <div className="flexCenter flex-col text-black z-[2]">
        <h2 className="dark-shadow sm:text-3xl md:text-5xl lg:text-6xl font-bold font-titleFont">
          {heading}
        </h2>
      </div>
    </div>
  );
};

export default FirstPart;
