import React from 'react';

import './Footer.scss';
import Button from '@mui/material/Button';

export function Footer() {
  return (
    <div className=" footer flex  ">
      <div className="flex button justify-between grow">
        <Button variant="text" className="previous font-medium">
          Previous
        </Button>
        <Button variant="contained" className="next font-semibold ">
          Next
        </Button>
      </div>
    </div>
  );
}
