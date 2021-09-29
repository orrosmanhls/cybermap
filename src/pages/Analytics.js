import React, { useState } from "react";

import "../style/analytics.css";
import imageExample from "../assets/image-example.png";
import MetaTags from "../components/MetaTags";

export default function Analytics(prop) {

  const [imageIsLoaded, setImageIsLoaded] = useState(false)

  return (
    <div className="careers-view background-dark-grey flex column align-center">
      <MetaTags />
      {imageIsLoaded && 
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

      <div className="image-container" style={imageIsLoaded ? {} : { display: 'none' }}>
        <img src={imageExample} className="analytics-image" onLoad={() => {setImageIsLoaded(true)}} />
      </div>

      {imageIsLoaded && 
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
