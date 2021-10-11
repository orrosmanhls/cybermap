import React, { useState } from "react";
import ReactLoading from 'react-loading';
import { useMediaQuery } from '@material-ui/core';

import "../style/analytics.css";
import categoryImage from "../assets/analytics/img_1_category.jpg";
import totalImage from "../assets/analytics/img_2_total.jpg";
import exitsImage from "../assets/analytics/img_3_exits.jpg";
import lifespanImage from "../assets/analytics/img_4_lifespan.jpg";
import MetaTags from "../components/MetaTags";

import categoryImageMobile from "../assets/analytics/mobile/img_1_category.jpg";
import totalImageMobile from "../assets/analytics/mobile/img_2_total.jpg";
import exitsImageMobile from "../assets/analytics/mobile/img_3_exits.jpg";
import lifespanImageMobile from "../assets/analytics/mobile/img_4_lifespan.jpg";

const assets = [
  {
    name: "category",
    image: categoryImage,
    mobileImage: categoryImageMobile
  },
  {
    name: "total",
    image: totalImage,
    mobileImage: totalImageMobile
  },
  {
    name: "exits",
    image: exitsImage,
    mobileImage: exitsImageMobile,
  },
  {
    name: "lifespan",
    image: lifespanImage,
    mobileImage: lifespanImageMobile,
  },
]

export default function Analytics(prop) {

  const [loadedImages, setLoadedImages] = useState([]); 
  const isMobile = useMediaQuery('(max-width:768px)');

  const getImage = (asset) => isMobile ? asset.mobileImage : asset.image; 
 
  // Indicates whether all images are loaded
  const allImagesLoaded = (loadedImages.length === 4);

  const isImageLoaded = (imageName) => loadedImages.some(name => name === imageName);

  const onImageLoad = (imageName) => {
    !isImageLoaded(imageName) && 
    setLoadedImages(prevLoadedImages => prevLoadedImages.concat([imageName]));
  }
  return (
    <div className="careers-view background-dark-grey flex column align-center">
      <MetaTags />
      {(!allImagesLoaded) && <ReactLoading type={"spinningBubbles"} color={"#a79b9b"} height={'75px'} width={'75px'} className="react-loading"/>}
      {allImagesLoaded &&
      <div className="container-fluid">
        <h1>CyberMap Analytics</h1>
        <div className="row">
          <div className="col-12 s12 m12 l8">
            <p className="text-justify">
              Explore YL Ventures’ CyberMap analytics to gain in-depth
              perspectives of the Israeli cybersecurity ecosystem. Track the
              industry's movements and market trends with our data-driven
              findings of solution categories, funding rounds, exits, and more!
            </p>
          </div>
        </div>
      </div>}
    
     {assets.map(asset => (
      <div key={asset.name} className="image-container" style={allImagesLoaded ? {} : { display: 'none' }}>
        <img src={getImage(asset)} className="analytics-image" onLoad={() => {onImageLoad(asset.name)}} alt={asset.name}/>
      </div>
     ))}

      {allImagesLoaded &&
      <div className="an-footer">
        <div className="container-fluid">
          <p>
            <i className="material-icons">info_outline</i>
            Data included refers to accessible public information. Undisclosed
            were not included in this analys
          </p>
        </div>
      </div>}
    </div>
  );
}
