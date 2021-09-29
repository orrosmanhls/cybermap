import React, {Component, useState, useEffect } from 'react'
import {Collapse} from 'react-collapse';

import '../style/analytics.css'
import imageExample from "../assets/image-example.png";
import { categoryColor } from '../utils';
import dataJSON from "../data.json";
import MetaTags from '../components/MetaTags';
import Spinner from '../components/Spinner';
import PerYearSection from '../components/chart/perYear/PerYearSection';
import Tooltip from '../components/Tooltip';
import FundingSection from '../components/chart/funding/FundingSection';
import AverageSection from '../components/chart/average/AverageSection';
import BubbleChartMobile from '../components/chart/bubble/BubbleChartMobile';
import BubbleChartWrapper from '../components/chart/bubble/BubbleChartNew';
import dayjs from 'dayjs';


export default function Analytics(prop) {
  const [isOpened, setIsOpened] = useState(false);
  const [loading, setLoading] = useState(false);
  const [companies, setCompanies] = useState(dataJSON.companies);
  const [exits, setExits] = useState();
  const [bubbleChartData, setBubbleChartData] = useState({});
  const [filteredBubbleChartData, setFilteredBubbleChartData] = useState({});
  const [totalCompany, setTotalCompany] = useState(0);
  const [totalCapital, setTotalCapital] = useState(0);
  const [showLessBubble, setShowLessBubble] = useState(true);
  

  const toggleShowLessBubble = () =>  {
    setShowLessBubble(prevState => !prevState);
  }


  const generateBubble = (data) => {
        
        let totalCapital = 0;

        data.companies.forEach(el => {
            totalCapital += (el.total_funding !== 'N/A') ? el.total_funding : 0;
        })

        // ----------bubble chart ---------- //
        let bubbleChartCategory = data?.companies.reduce((r, a) => {
            r[a.category] = [...r[a.category] || [], a];
            return r;
           }, {});

           let bubbleChartData = [];

            Object.keys(bubbleChartCategory).forEach((category) => {
                let obj = {};

                obj.label = category;
                obj.value = bubbleChartCategory[category].length*100/data.companies.length > 1 ? (bubbleChartCategory[category].length*100/data.companies.length).toFixed(1) : (bubbleChartCategory[category].length*100/data.companies.length).toFixed(0);
                obj.color = categoryColor(category);

                bubbleChartData.push(obj);
            });
            
        //* set state section
        setBubbleChartData(bubbleChartData);
        setFilteredBubbleChartData(bubbleChartData);
        setTotalCompany(data?.companies.length);
        setTotalCapital(totalCapital);

  }


    useEffect(() => {
      const naCompanies = dataJSON.companies.filter(company => {
        if(company.total_funding === 50) {
          return true;
        }
      });
      const ExitsWithFormattedDated = dataJSON.exits.map(exit => ({...exit, exit_date: dayjs(exit.exit_date).$y}));
      setExits(ExitsWithFormattedDated);
      generateBubble(dataJSON);
    }, []);    
  
    // set active class to filter buttons
    const setActiveClass = (element) => {
      Array.from(document.getElementsByClassName("cybermap-list_btn")).forEach((el) => {
        el.classList.remove('active');
      });
      element.target.classList.add('active');
    }
    
    
    
    // function for filter bubble chart 
    const filterCategoryByFunding = (e, fData) => {    
      
        setActiveClass(e);
        let totalCapital = 0;
            
        if (fData.all === 'all') {
            companies.map(v => {
                if (v.total_funding !== 'N/A') totalCapital +=v.total_funding;
            })

            generateBubble({'companies': companies});
            return;
            
        } 

// -----------------------
        else if (fData.start === 0 && fData.end === 10) {
            var resultForCount = companies.filter((data) => {
                return (data.total_funding >= 0 && data.total_funding <= 10)  || data.total_funding === 'N/A';
            });
        }
// ----------------------
        else if (fData.start === 10 && fData.end === 30) {
            var resultForCount = companies.filter((data) => {
                return data.total_funding > 10 && data.total_funding <= 30
            });
        }
// ----------------------
        else if (fData.start === 30 && fData.end === 50) {
            var resultForCount = companies.filter((data) => {
                return data.total_funding > 30 && data.total_funding <= 50
            });

            
            var result = bubbleChartData.filter((data) => {
                    return data.value > 30 && data.value <= 50
            });
        }
// ----------------------
        else {  
            var resultForCount = companies.filter((data) => {
                return data.total_funding > 50;
            });


            var result = bubbleChartData.filter((data) => {
                    return data.value > 50;
            });
        }

        generateBubble({'companies': resultForCount});

        resultForCount.map(v => {
            if (v.total_funding !== 'N/A') totalCapital +=v.total_funding;
        })

        

        setTotalCompany(resultForCount.length);
        // setTotalCompany(totalCompany);
    }

    const showCollapse = () => {
        setIsOpened(prevState => !prevState);
    }

        const capitalRaised = Math.ceil(totalCapital,5);
        return exits ? (
            <div className="careers-view background-dark-grey flex column align-center">
                <MetaTags />
                <div className="container-fluid">
                    <h1>CyberMap Analytics</h1>
                    <div className="row">
                        <div className="col-12 s12 m12 l8">
                            <p className="center-align">
                            Explore YL Ventures’ CyberMap analytics to gain in-depth perspectives of the Israeli cybersecurity ecosystem. 
                            Track the industry's movements
                            and market trends with our data-driven findings of solution categories, funding rounds, exits, and more!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="image-container">
                  <img src={imageExample} className="analytics-image"/>
                </div>

                <div className="an-footer">
                    <div className="container-fluid">
                    <p><i className="material-icons">info_outline</i>
                    Data included refers to accessible public information.
                    Undisclosed were not included in this analys</p>
                    </div>
                </div>
            </div>
        ) : null;
}
