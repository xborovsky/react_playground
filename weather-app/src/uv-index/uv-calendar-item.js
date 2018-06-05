import React from 'react';
import { calculateUvColor } from '../utils/uv-color-calculator.util';

const UvIndexCalendarItem = ({dayName, index}) =>
    <div className="kalendar-den">
        <h3>{dayName}</h3>
        <div className="kalendar-den-data">
        <div className="kalendar-den-hodnota">
            <svg width="30" viewBox="0 0 10 10">
            <circle r="4" cx="5" cy="5" strokeWidth="1" stroke="white" fill="none" style={{stroke: calculateUvColor(index)}}></circle>
            </svg>
        </div>
        <div className="kalendar-den-popis">{index}</div>
        </div>
    </div>

export default UvIndexCalendarItem;