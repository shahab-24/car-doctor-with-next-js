import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoCartOutline,IoSearchOutline } from "react-icons/io5";

const NavBar = () => {

  const navItems = [
    {
      title: 'Home',
      path: '/'
    },
    {
      title: 'About',
      path: '/about'
    },
    {
      title: 'Services',
      path: '/services'
    },
    {
      title: 'Blog',
      path: '/blog'
    },
    {
      title: 'Contacts',
      path: '/contacts'
    },
  ]

  return (
    <div className="bg-base-100">
     <div className='navbar container mx-auto '>
       <div className="navbar-start">
         <div className="dropdown">
           <div tabIndex={0} role="button">
       <Link href={'/'}>
       <Image alt='logo' src='/assets/logo.svg' height={60} width={60}></Image>
       </Link>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {
        navItems.map((item) => (<Link href={item.path} key={item.path}>{item.title}</Link>))
       }
      </ul>
    </div>
    
  </div>
  <div className="hidden lg:flex items-center space-x-6">
    {
        navItems.map((item) => (<Link className='font-semibold hover:text-primary duration-300' href={item.path} key={item.path}>{item.title}</Link>))
       }
  
  </div>
  <div className="navbar-end">
  <div className='flex items-center space-x-4'>
  <IoCartOutline className='text-2xl' />
  <IoSearchOutline className='text-2xl' />
  <a className="btn btn-outline btn-primary hover:text-white">Appointment</a>
  </div>
    
  </div>
</div>
    </div>
  );
};

export default NavBar;