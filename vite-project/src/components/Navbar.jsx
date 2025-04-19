import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/Logo.png';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-3xl font-bold">
         <NavLink
            to="/home" ><img className="h-16 w-auto" src={logo} alt="Logo" /> </NavLink>
        </div>

        {/* Menu */}
        <div className="space-x-4">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `text-white text-2xl hover:text-gray-300 transition duration-300 ${isActive ? 'text-yellow-300' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-white text-2xl hover:text-gray-300 transition duration-300 ${isActive ? 'text-yellow-300' : ''}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/categories"
            className={({ isActive }) =>
              `text-white text-2xl hover:text-gray-300 transition duration-300 ${isActive ? 'text-yellow-300' : ''}`
            }
          >
            Categories
          </NavLink>
          <NavLink
            to="/quiz"
            className={({ isActive }) =>
              `text-white text-2xl hover:text-gray-300 transition duration-300 ${isActive ? 'text-yellow-300' : ''}`
            }
          >
            Start Quiz
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
