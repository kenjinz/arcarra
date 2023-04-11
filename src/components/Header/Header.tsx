import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import './Header.scss';

export function Header() {
  return (
    <div className="bg-black header flex justify-between">
      <p className="text font-bold text-white">Choose the form of payment</p>
      <CloseIcon style={{ color: 'white' }} className="closeIcon" />
    </div>
  );
}
