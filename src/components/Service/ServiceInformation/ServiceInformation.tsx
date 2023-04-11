import React from 'react';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PlaceIcon from '@mui/icons-material/Place';
import './ServiceInformation.scss';
export function ServiceInformation() {
  return (
    <div className="serviceInformation">
      <p className="title font-semibold">Japanese lessons</p>
      <p className="address font-medium flex items-center">
        <CalendarTodayIcon
          sx={{ width: 24, height: 24 }}
          className="flex"
          style={{
            marginRight: '12px',
          }}
        />
        Nov 7, 2020 · 11:30
      </p>
      <p className="place font-medium items-center">
        <PlaceIcon
          sx={{ width: 24, height: 24 }}
          className="flex"
          style={{
            marginRight: '12px',
          }}
        />
        Client`s place
      </p>
      <p className="price font-semibold">Rp 350.000</p>
    </div>
  );
}
