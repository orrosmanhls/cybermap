import React, {Component, useState, useEffect } from 'react'
import BubbleChartWrapper from '../components/chart/bubble/BubbleChart';
import PerYearSection from '../components/chart/perYear/PerYearSection';
import MetaTags from '../components/MetaTags';
import Tooltip from '../components/Tooltip';
import {Collapse} from 'react-collapse';

import '../style/analytics.css'
import FundingSection from '../components/chart/funding/FundingSection';
import AverageSection from '../components/chart/average/AverageSection';
import Spinner from '../components/Spinner';
import BubbleChartMobile from '../components/chart/bubble/BubbleChartMobile';

import { categoryColor } from '../utils';

export default function Analytics(prop) {
  const [isOpened, setIsOpened] = useState(false);
  const [loading, setLoading] = useState(false);
  const [companies, setCompanies] = useState([]);
  const [exits, setExits] = useState([]);
  const [bubbleChartData, setBubbleChartData] = useState({});
  const [filteredBubbleChartData, setFilteredBubbleChartData] = useState({});
  const [totalCompany, setTotalCompany] = useState(0);
  const [totalCapital, setTotalCapital] = useState(0);
  const [showLessBubble, setShowLessBubble] = useState(true);
  

    const toggleShowLessBubble = () =>  {
      setShowLessBubble(prevState => !prevState);
      console.log('called');
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
      setLoading(true);
      let requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      fetch("https://script.google.com/macros/s/AKfycbzb8LxPHh2JRpmBiZfjKXy0AV1nbZrdpgOsNvVlioTkl81TXLUCx6CZBjoLxA1471ko/exec", requestOptions)
      .then(response => response.text())
      .then(result => {
        let data = JSON.parse(result);
        console.log(data);
        
        const exits = data.exits.map((e) => {
          e.exit_date =  new Date(e.exit_date).getFullYear();
          return e;
        });
        setCompanies(data.companies);
        setExits(exits);
        generateBubble(data);
        setLoading(false);
      })
      .catch(error => console.log('error', error));
      
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
        setTotalCompany(totalCompany);
    }

    const showCollapse = () => {
        setIsOpened(prevState => !prevState);
    }

        const capitalRaised = Math.ceil(totalCapital,5);
        return (
            <div className="careers-view background-dark-grey">
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


                    <div className="row background-dark-grey page-top white-text center" style={{'marginBottom': 0}}>
                        <div className="font-14 bubble-chart_title">
                            <span className="left left-align main-company-counter">
                                Companies by Category  
                                <Tooltip
                                    text="Percentage of active companies in each category"
                                    icon="help_outline"
                                    randomID = 'company-category' 
                                />
                            </span>
                            <div className="right left-align top-menu hide-on-med-and-down">

                                <button onClick={(e) => filterCategoryByFunding(e,{all:'', start: 0, end: 10})}  className="cybermap-list_btn">$0-10M</button>

                                <button onClick={(e) => filterCategoryByFunding(e,{all:'', start: 10, end: 30})} className="cybermap-list_btn">$10-30M</button>

                                <button onClick={(e) => filterCategoryByFunding(e,{all:'', start: 30, end: 50})} className="cybermap-list_btn">$30-50M</button>

                                <button onClick={(e) => filterCategoryByFunding(e,{all:'', start: 50, end: null})} className="cybermap-list_btn">+$50M</button>

                                <button onClick={(e) => filterCategoryByFunding(e, {all:'all', start: null, end: null})} className="cybermap-list_btn active">All</button>


                                <div className="clear"></div>
    
                            </div>
                        </div>
                    </div>

                    <hr/>

                   <div className="cybermap-bubble_chart_wrapper">
                        {/* <div className="row"> */}
                            <div className="cybermap-bubble_desc">
                                <div className="hide-on-med-and-down">
                                    <p>
                                            Total companies
                                            <span>{totalCompany}</span>
                                    </p>

                                    <p>
                                            Total capital raised <br/>
                                            by active companies
                                            <span>${Number.parseFloat(capitalRaised*0.001).toFixed(2)}B</span>
                                    </p>
                                </div>

                                <div className="mobile-filter_btn hide-on-large-only">
                                        <button className="filterCollapse" onClick={showCollapse}>
                                            Filter by funding <i className="material-icons valign-middle no-margin">arrow_drop_down</i>
                                        </button>
                                        <Collapse isOpened={isOpened}>
                                            <button onClick={(e) => filterCategoryByFunding(e, {all:'all', start: null, end: null})} className="cybermap-list_collapse active">All</button>

                                            <button onClick={(e) => filterCategoryByFunding(e,{all:'', start: 0, end: 10})}  className="cybermap-list_collapse">$0-10M</button>

                                            <button onClick={(e) => filterCategoryByFunding(e,{all:'', start: 10, end: 30})} className="cybermap-list_collapse">$10-30M</button>

                                            <button onClick={(e) => filterCategoryByFunding(e,{all:'', start: 30, end: 50})} className="cybermap-list_collapse">$30-50M</button>

                                            <button onClick={(e) => filterCategoryByFunding(e,{all:'', start: 50, end: null})} className="cybermap-list_collapse">+$50M</button>
                                        </Collapse>
                                    </div>
                            </div>
                            {showLessBubble && <div className="cybermap-bubble_chart right" style={{ position: 'relative' }}>
                                {filteredBubbleChartData.length ? <BubbleChartWrapper chartData={filteredBubbleChartData} />: <p>No Data</p>}
                            </div>}
                            <div className="show-less-centered hide-on-large-only">
                                <button className="show-less_bubble" onClick={toggleShowLessBubble}>
                                    Show {showLessBubble ? 'Less' : 'More' }
                                     <i className="material-icons">{showLessBubble ? 'expand_less' : 'expand_more'}</i>
                                </button>
                            </div>
                            <div className="hide-on-large-only">
                            {filteredBubbleChartData.length ?  <BubbleChartMobile chartData={filteredBubbleChartData} /> : <p>No Data</p>}
                            </div>
                        {/* </div> */}
                   </div>
                </div>



                <FundingSection exits={exits} companies={companies} />

                <PerYearSection exits={exits} companies={companies} />

                <AverageSection exits={exits} />

                {loading && <Spinner />}

                <div className="an-footer">
                    <div className="container-fluid">
                    <p><i className="material-icons">info_outline</i>
                    Data included refers to accessible public information.
                    Undisclosed were not included in this analys</p>
                    </div>
                </div>
            </div>
        );
}
