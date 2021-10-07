import React, { useState } from "react";
import ReactLoading from 'react-loading';

import "../style/analytics.css";
import categoryImage from "../assets/analytics/img_1_category.jpg";
import totalImage from "../assets/analytics/img_2_total.jpg";
import exitsImage from "../assets/analytics/img_3_exits.jpg";
import lifespanImage from "../assets/analytics/img_4_lifespan.jpg";
import MetaTags from "../components/MetaTags";

const assets = [
  {
    name: "category",
    image: categoryImage
  },
  {
    name: "total",
    image: totalImage
  },
  {
    name: "exits",
    image: exitsImage
  },
  {
    name: "lifespan",
    image: lifespanImage
  },
]

export default function Analytics(prop) {

  const [loadedImages, setLoadedImages] = useState([]); 

  // Indicates whether all images are loaded
  const allImagesLoaded = (loadedImages.length === 4);

  const onImageLoad = (imageName) => {
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
            <p className="center-align">
              Explore YL Ventures’ CyberMap analytics to gain in-depth
              perspectives of the Israeli cybersecurity ecosystem. Track the
              industry's movements and market trends with our data-driven
              findings of solution categories, funding rounds, exits, and more!
            </p>
          </div>
        </div>
      </div>}
        
     {assets.map(asset => (
      <div className="image-container" style={allImagesLoaded ? {} : { display: 'none' }}>
        <img src={asset.image} className="analytics-image" onLoad={() => {onImageLoad(asset.name)}} />
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
