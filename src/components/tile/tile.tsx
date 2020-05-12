import React from "react";
import logo from '../../Blackrock.jpg';
import './tile.css';

export const Tile = (props: any) => (

<div>



  <div className="holder">


        <div className="header">Blackrock</div>
      
        <div className="details">
          <div className="title">Next high tide</div>
          <div className="time">{props.time}</div>
          
        </div>
    
  </div>
  
    <div className="upcoming">
        <h2>Upcoming</h2>
            {props.tides.map((item: any, key: any) =>
                <div className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-5" key={item}>{item}</div>
            )}
    </div>
</div>
  
)