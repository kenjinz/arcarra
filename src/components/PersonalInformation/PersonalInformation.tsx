import React from 'react';
import './PersonalInformation.scss';
import { Avatar } from '@mui/material';
export function PersonalInformation() {
  return (
    <div className="personalInformationContainer flex">
      <Avatar sx={{ width: 90, height: 90 }} className="avatar">
        J
      </Avatar>
      <div className="personalInformation flex flex-col">
        <p className="name font-semibold">John</p>
        <p className="phone font-medium">(88) 99602-2404</p>
      </div>
    </div>
  );
}
