import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">RecipeFinder</Link>
        <div className="space-x-6">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/categories" className="hover:text-gray-200">Categories</Link>
          <Link to="/favorites" className="hover:text-gray-200">Favorites</Link>
          <Link to="/create-your-own" className="hover:text-gray-200">Create Your Own</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
