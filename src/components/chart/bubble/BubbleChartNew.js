import React, { useEffect } from 'react';
import BubbleChart from '@weknow/react-bubble-chart-d3';
// import BubbleChart from '../../../libraries/react-bubble-chart-d3';
import { useMediaQuery } from 'react-responsive'


export default function BubbleChartWrapper({ chartData }) {

  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isMobile = useMediaQuery({ maxWidth: 768});
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 992 });

  useEffect(() => {
    
    const textValue = document.getElementsByClassName("value-text");
    Array.from(textValue).forEach(v => {
        v.textContent += "%";
    });
  }, []);
  
  const getWidth = () => {
    switch (true) {
      case isMobile:
        return 625
      case isTablet:
          return 600
      case isDesktop:
        return 1100
      default:
        break;
    }    
  }

  const getHeight = () => {
    switch (true) {
      case isMobile:
        return 450
      default:
        return 600
    }    
  }
  
  return (
    <>
      <div 
        id="bubble_chart_tooltip"
        className="tooltip"
        style={{
          opacity: 0, 
          backgroundColor: 'white', 
          border: 'solid', 
          border: '1px solid transparent', 
          borderRadius: '3px', 
          padding: '8px 21px',
          position: 'absolute',
          color: '#222',
          fontWeight: 600,
          fontSize: '13px',
          transition: 'opacity 0.3s ease-out'
        }}
      ></div>
      <BubbleChart
        graph= {{
          zoom: .55,
          offsetX: 0,
          offsetY: -0.01,
        }}
        
        width={getWidth()}
        height={getHeight()}
        padding={20} // optional value, number that set the padding between bubbles
        showLegend={false} // optional value, pass false to disable the legend.
        valueFont={{
              family: 'Arial',
              size: 15,
              color: '#fff',
              weight: 'normal',
            }}
        labelFont={{
              family: 'Arial',
              size: 12,
              color: '#fff',
              weight: 'normal',
            }}
        color={'rgb(230, 85, 13)'}
        // bubbleClickFunc={this.bubbleClick}
        // legendClickFun={this.legendClick}
        data={chartData}
      />
    </>
  )
}