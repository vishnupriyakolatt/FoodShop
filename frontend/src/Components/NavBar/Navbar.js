import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";


function Navbar({ bg }) {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMobileNav = () => {
    setShowMenu(!showMenu);
  };


  return (
    <>
    <header
      className={`${
        bg ? 'bg-white py-2 lg:py-2' : 'bg-white'
      } fixed left-0 py-0 z-10 w-full transition-all duration-200 shadow-lg shadow-gray-500/40 `}
    >
      <div className='relative w-full max-w-[100] h-20 flex items-center justify-between pt-10 mx-auto px-10 shadow-lg shadow-gray-500/40 '>
        <div className='flex items-center'>
          <img src='https://media.istockphoto.com/id/1205419959/vector/vegetables-on-shopping-cart-trolley-grocery-logo-icon-design-vector.jpg?s=612x612&w=0&k=20&c=HgCTmq-4R0-MvKIGrSFJcifqqoJIcducRZBVTO4V5TU='className='mt-[-50px] w-20 h-15' alt='Logo' />
          <p className='ml-[-0.75px] mt-[-30px] font-extrabold text-4xl'>
        G-CART
          </p>
        </div>

        <ul className='hidden md:flex items-center gap-10 lg:gap-[68px] font-bold text-xl pb-10'>
          <Link to='/'>Home</Link>
          <Link to='/addproduct'>Add</Link>
        </ul>

      
     
        <HiMenuAlt3
          size={30}
          className='block md:hidden cursor-pointer text-black mt-[-38px]'
          onClick={toggleMobileNav}
        />

        <div
          className={`block md:hidden w-full fixed ${
            !showMenu ? '-top-[410px]' : 'top-0'
          } left-0 bg-white h-[410px] transition-all duration-[800ms] shadow-xl z-10 py-8 px-12 rounded-b-xl`}
        >
          <AiOutlineClose
            size={25}
            className='absolute top-5 right-5 cursor-pointer'
            onClick={() => setShowMenu(false)}
          />
          <ul className='pt-[60px] items-center flex flex-col gap-8'>
            <Link to='/'>Home</Link>
            <Link to='/category'>Add</Link>
          </ul>
        </div>
      </div>
      {showMenu && (
        <div className='mobile-nav-overlay' onClick={toggleMobileNav} />
      )}
    </header>
    <div></div>
  </>
    
  );
};

export default Navbar;