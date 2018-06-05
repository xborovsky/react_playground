import React from 'react';
import UvIndexCalendarItem from './uv-calendar-item';

const UvIndexCalendar = ({data, dayNames}) =>
  <div className="kalendar uv-index">
      {
        data.map((entry, idx) =>
          <UvIndexCalendarItem key={idx} dayName={dayNames[idx].short} index={entry.value} />
        )
      }
  </div>

export default UvIndexCalendar;