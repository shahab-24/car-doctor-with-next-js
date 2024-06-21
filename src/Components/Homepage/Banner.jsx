import React from 'react';

const Banner = () => {
  return (
 <div className='container mx-auto mt-12'>
     <div className="carousel w-full">
   {
    banners.map((banner, index) => 
     <div
      style={{backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(/assets/images/banner/${index+1}.jpg)`,}} 
      key={index} 
      id={`slide${index+1}`}
       className="carousel-item relative w-full h-[90vh] bg-top bg-no-repeat bg-cover rounded-xl">
      <div className='h-full w-full flex items-center pl-36'>
     <div className='space-y-6'>
     <h2 className='text-4xl font-bold text-white'>{banner.title}</h2>
     <p>{banner.description}</p>
     <button className='btn btn-primary'>Discover More</button>
     <button className='btn btn-primary btn-outline mr-4'>Latest Project</button>
     </div>

       
      </div>
      <div className="absolute flex justify-between transform right-12 bottom-12">
        <a href={banner.prev} className="btn btn-circle">❮</a> 
        <a href={banner.next} className="btn btn-circle">❯</a>
      </div>
    </div> )
   }
   
   
   
  </div>
 </div>
  );
};
const banners = [
  {
    title: 'Affordable Price For Car Servicing',
    description: 'Monotonectally evisculate bleeding-edge vortals with functionalized process improvements. Credibly generate competitive technology with.',
    next: '#slide2',
    prev: '#slide4'

  },
  {
    title: 'Affordable Price For Car Servicing',
    description: 'Monotonectally evisculate bleeding-edge vortals with functionalized process improvements. Credibly generate competitive technology with.',
    next: '#slide4',
    prev: '#slide2'

  },
  {
    title: 'Affordable Price For Car Servicing',
    description: 'Monotonectally evisculate bleeding-edge vortals with functionalized process improvements. Credibly generate competitive technology with.',
    next: '#slide1',
    prev: '#slide3'

  },
  {
    title: 'Affordable Price For Car Servicing',
    description: 'Monotonectally evisculate bleeding-edge vortals with functionalized process improvements. Credibly generate competitive technology with.',
    next: '#slide3',
    prev: '#slide1'

  }
]

export default Banner;