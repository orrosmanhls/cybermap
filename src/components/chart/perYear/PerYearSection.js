import React, { useState, useEffect } from 'react';
import Tooltip from '../../Tooltip';
import PerYearChart from './PerYearChart';
import dayjs from "dayjs";

export default function PerYearSection({exits,companies}){
  
  const [exitsPerYear, setExitsPerYear] = useState();
  const [exitsDates, setExitsDates] = useState();
  const [exitsThisYear, setExitsThisYear] = useState();
  const [exitsRecentImages, setExitsRecentImages] = useState();

  useEffect(() => {
    let exitDates = exits?.reduce((r, a) => {
      r[a.exit_date] = [...r[a.exit_date] || [], a];
      return r;
    }, {});
  
    let exitPerYears = [];
    let exitThisYear = 0;
    let exitThisYearImages = [];
    let exitRecentImages = [];
  
    Object.keys(exitDates).forEach((year) => {
        let obj = {};
        const d = new Date();
        const n = d.getFullYear();
  
        obj.name = year;
        obj.year = year;
        obj.company = exitDates[year].length;
  
        if(Number(year) === dayjs().$y) {
            exitThisYear = exitDates[year].length;
            exitThisYearImages = exitDates[year];
            exitRecentImages = [...exitDates[year]];
            exitRecentImages.splice(1,6)
        }
  
        exitPerYears.push(obj);

    });
    setExitsPerYear(exitPerYears);
    setExitsDates(exitDates);
    setExitsThisYear(exitThisYear)
    setExitsRecentImages(exitRecentImages);
    console.log(exitPerYears);
  }, []);
  
  // per year chart 
    return exitsPerYear ? (
        <section className="section section-3">
            <div className="container-fluid">
                <div className="row">
                    <div className="col s12">
                        <span className="left left-align section-title">
                            Exited Companies per Year
                            <Tooltip
                                text="Total number of companies exited per year"
                                icon="help_outline" 
                                randomID = 'chart_id_2'
                            />
                        </span>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m9">

                        <div className="section-chart_peryear">
                            {exitsPerYear.length ? <PerYearChart data={exitsPerYear} exitDates={exitsDates} companies={companies} /> : <p>Fetching data...</p> } 
                        </div>
                    </div>

                    <div className="col s12 m3">
                        <div className="cybermap_box blackBox">
                            <div className="cybermap_box_flex">
                                <span>
                                    Number of this <br/>
                                    year's exits
                                </span>
                                <span>
                                    { exitsThisYear ? exitsThisYear : "00" }
                                </span>
                            </div>
                        </div>

                        <div className="title_out">
                            <span>
                                Recent Exits
                            </span>
                        </div>
                        <div className="cybermap_box">
                            <div className="row box-img_wrapper">
                                {exitsRecentImages?.map((img, index)=>{
                                    return <img alt={'cybermap analytics'} className="logo-image" key={index} src={img.logo} />
                                })
                                
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    ) : null;
}