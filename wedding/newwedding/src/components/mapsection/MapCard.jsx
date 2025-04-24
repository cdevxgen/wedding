"use client"

import React from "react";
import styles from "./MapCard.module.css";
import Image from "next/image";
import Button from "@mui/material/Button";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const MapCard = () => {
  const openMaps = () => {
    const mapsLink = "https://maps.app.goo.gl/F9uLbKACrW6YodPMA";
    window.open(mapsLink, "_blank");
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Venue: Nanda Convention Hall Near Balaji Talkies D Kalenahalli, Road, Channarayapatna, Karnataka - 573116.</h1>
        <p>Join us at this wonderful location for a Wedding Ceramony!</p>
        <div className={styles.containerbuttonnxt}>
          <Button
            className={styles.buttonnxt}
            variant="contained"
            color="primary"
            onClick={openMaps}
          >
            <LocationOnIcon />Locate on Map
          </Button>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/assets/location.jpg" alt="Map" width={750} height={750} />
      </div>
    </div>
  );
};

export default MapCard;
