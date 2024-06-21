import React from "react";
import {services} from '../../lib/Services'
import ServicesCard from '../cards/ServicesCard'

const Services = () => {

  
 
  return (
    <div className="min-h-screen">
      
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-orange-500">Our Services</h2>
          <h3 className="text-5xl mb-6">Our Services Area</h3>
          <p>Intrinsicly pontificate bricks-and-clicks web-readiness <br /> after vertical networks. Dynamically impact cutting-edge e-markets via superior convergence. Progressively.</p>
        </div>
        <div className="container mx-auto mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {
        services.map((service) =>
        <ServicesCard service={service} key={service._id}></ServicesCard>
        )
      }

        </div>
      
    </div>
  );
};

export default Services;
