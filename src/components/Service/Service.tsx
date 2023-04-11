import React from 'react';
import './Service.scss';
import { ServiceInformation } from './ServiceInformation';
export function Service() {
  return (
    <div className="serviceContainer flex">
      <div className="serviceImage">
        <img src="/img/service.png" alt="service" />
      </div>
      <ServiceInformation />
    </div>
  );
}
