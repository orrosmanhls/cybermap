import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import PerYearLogos from './PerYearLogos';

export default function PerYearChart(props) {

  const [data, setData] = useState(props.data);
  const [logos, setLogos] = useState([]);

  const [show, setShow] = useState(false);
  const [year, setYear] = useState(null);
  
  const [cx, setCx] = useState(0);
  const [cy, setCy] = useState(0);

  // useEffect(() => {
  //   setData(props.data);
  // }, []);

  const clickedDot = ({cx,cy,payload}) => {
    const y = payload.year;
    let logos = [];
    const selectedYearCompanies = props.exitDates[`${y}`];
    selectedYearCompanies.map((c) => {
      logos.push(c.logo);
    });
    
    setShow(true);
    setCx(cx);
    setCy(cy);
    setYear(payload.year);
    // setLogos(payload);
    setLogos(logos);
  }

  const close = () => {
    setShow(false);
  }

    return (
      <>
        <ResponsiveContainer width='100%'>
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: -30,
              bottom: 5,
            }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#129a74" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#129a74" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeOpacity={.2} strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Line dot strokeWidth={3} isAnimationActive={false} type="monotone" dataKey="company" fill="url(#gradient4)" stroke="#3E999A" activeDot={{ onClick: (event, payload) => clickedDot(payload)}} />
          </LineChart>
        </ResponsiveContainer>

        {show && 
        <PerYearLogos
          cx={cx} 
          cy={cy} 
          year={year} 
          logos={logos} 
          data = {props.exitDates}
          close={close} 
        /> } 

      </>
    );
}