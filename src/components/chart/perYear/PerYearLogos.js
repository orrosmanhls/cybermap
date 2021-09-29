import React, { useState, useEffect } from 'react';

export default function PerYearLogos(props) {
        
  const [cx, setCx] = useState(props.cx);
  const [cy, setCy] = useState(props.cy);
  const [logos, setLogos] = useState(props.logos);
  const [year, setYear] = useState(props.year);
  const [years, setYears] = useState(null);
  const [key, setKey] = useState(null);
  const [data, setData] = useState(props.data);

  const scrollRight = () => {
        if(years[key+1]) {
            const y = years[key+1];
            let logos = [];
            const selectedYearCompanies = data[`${y}`]
            selectedYearCompanies.map((c) => {
              logos.push(c.logo);
            });
            setLogos(logos);
            setYear(y);
            setKey(prevKey => prevKey + 1);
        }
    }


    const scrollLeft = () => {
        if(years[key-1]) {
            const y = years[key-1];
            let logos = [];
            const selectedYearCompanies = props.data[`${y}`]
            selectedYearCompanies.map((c) => {
              logos.push(c.logo);
            });
            setLogos(logos);
            setYear(y);
            setKey(preKey => preKey - 1);
        }

    }
    useEffect(() => {
      let years = [];
      Object.keys(props.data).map(el => {
          years.push(Number(el));
      });
      let key = Object.keys(props.data).indexOf(props.year);

      setYears(years);
      setKey(key);
    }, []);

    const images = logos?.map((l,index) => {
        return (
            <div className="col s4" key={index}>
                <img className="logo-image" alt="cybermap analytics" src={`${l}`} />
            </div>
        )
    })
    return (
        <div className="tooltip-modal_custom" style={{'top': `${cy+50}px`, 'left': `${cx}px`}}>
            <div className="modal-header">
                <div className="modal-header_left">
                    <h4>{year}</h4>
                    <div>
                    <button className="scroll-left" onClick={() => scrollLeft(year)}>
                        <i className="material-icons">arrow_back</i>
                    </button>
                    <button className="scroll-right" onClick={() => scrollRight(year)}>
                        <i className="material-icons">arrow_forward</i>
                    </button>
                    </div>
                </div>
                <button className="close" onClick={() => props.close()}><i className="material-icons">close</i></button>
            </div>
            <div className="clear"></div>
            <div className="scroll-wrapper">
                <div className="row">
                    {images}
                </div>
            </div>
        </div>
    );
}