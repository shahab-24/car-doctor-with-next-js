import Image from 'next/image';
import React from 'react';

const ServicesCard = ({service}) => {
  const {title, img, price} = service || {};
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
    <figure>
    <Image height={120} width={430} src={img} alt={title}></Image>
    </figure>
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      
      
      <div className="card-actions justify-between items-center">
      <h2 className="text-primary font-semibold">Price: ${price}</h2>
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
  );
};

export default ServicesCard;