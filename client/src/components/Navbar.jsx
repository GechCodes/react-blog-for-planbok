import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/Planbok-logo.png'
import '../App.css'

// react icons
import { FaBars, FaInstagram, FaPhoenixFramework } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { useState } from 'react';
import Modal from './Modal';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen,setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  // navItems
  const navItems = [
    {path: "/", link: "Home"},
    {path: "/services", link: "Services"},
    {path: "/about", link: "About"},
    {path: "/blogs", link: "Blogs"},
    {path: "/contact", link: "Contact"},
  ]

  //modal details
  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <header className='bg-emerald-900 text-green-100 fixed top-0 left-0 right-0'>
      <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
        <a href="/" ><img className="h-12" src={logo} alt="logo" /></a>

        {/* navitems for ig devices*/}
        <ul className="md:flex gap-12 text-lg hidden">
          {
            navItems.map(({path, link}) => <li className="text-green-100" key={path}>
              <NavLink className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    } to={path}>{link}</NavLink>
            </li>)
          }
        </ul>

        {/* menu icons */}
        <div className="text-green-100 lg:flex gap-4 items-center hidden">
          <a href="/" className="hover:text-green-600"><FaLinkedinIn/></a>
          <a href="/" className="hover:text-green-600"><FaInstagram/></a>
          <a href="/" className="hover:text-green-600"><FaTwitter/></a>
          <button onClick={openModal} className="bg-emerald-700 px-6 py-2 font-medium rounded hover:bg-green-600 transition-all ease-in ">Log in</button>
        </div>

        {/* our modal component is here */}

        <Modal isOpen={isModalOpen} onClose={closeModal} />

        { /* mobile menu button, display mobile screen */}
        <div className="md:hidden" >
          <button onClick={toggleMenu} className="cursor-pointer" >
            {
              isMenuOpen ? <FaXmark className="w-5 h-5" /> : <FaBars className="w-5 h-5" />
            }
            </button>
        </div>
      </nav>

      {/* menu items only for mobile */}
       <div>
       <ul className={`gap-12 text-lg md:hidden block space-y-4 px-4 py-6 mt-14 bg-green-100 ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150" :"hidden"}`}>
          {
            navItems.map(({path, link}) => <li className="text-emerald-600" key={path}>
              <NavLink onClick={toggleMenu} to={path}>{link}</NavLink>
            </li>)
          }
        </ul> 
      </div>
    </header>
  )
}

export default Navbar