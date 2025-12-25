import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import userContext from "../utils/userContext";
import {useSelector} from 'react-redux';

const Header = () => {
  const [login, setLogin] = useState("Log in");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const {loggedInUser} = useContext(userContext);

  const cartItems = useSelector((store) => store.cart.items)


  return (
    <>
      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      
      {/* Mobile menu */}
      <div className={`md:hidden fixed top-16 left-0 w-64 h-full bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-6 pt-4">
          <nav className="space-y-4">
            <Link 
              to="/" 
              className="block py-3 px-4 text-lg font-medium text-gray-900 hover:text-orange-500 hover:bg-orange-50 rounded-xl transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/offers" 
              className="block py-3 px-4 text-lg font-medium text-gray-900 hover:text-orange-500 hover:bg-orange-50 rounded-xl transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Offers
            </Link>
            <Link 
              to="/restaurants" 
              className="block py-3 px-4 text-lg font-medium text-gray-900 hover:text-orange-500 hover:bg-orange-50 rounded-xl transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Foods
            </Link>
            <Link 
              to="/about" 
              className="block py-3 px-4 text-lg font-medium text-gray-900 hover:text-orange-500 hover:bg-orange-50 rounded-xl transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
                        <Link 
              to="/contact" 
              className="block py-3 px-4 text-lg font-medium text-gray-900 hover:text-orange-500 hover:bg-orange-50 rounded-xl transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/cart" 
              className="block py-3 px-4 text-lg font-medium text-gray-900 hover:text-orange-500 hover:bg-orange-50 rounded-xl transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Cart {cartItems.length}
            </Link>
            <h2 className="font-bold px-4">{loggedInUser}</h2>
          </nav>

          
          
          <button
            onClick={() => {
              setLogin(login === "Log in" ? "Logout" : "Log in");
              setIsMenuOpen(false);
            }}
            className="mt-6 w-full px-6 py-3 bg-orange-500 text-white text-lg font-bold rounded-xl shadow-lg hover:bg-orange-600 active:bg-orange-700 transition-all duration-200"
          >
            {login}
          </button>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <img 
                  className="h-10 lg:h-12 w-auto object-contain" 
                  src={LOGO_URL} 
                  alt="Food Delivery Logo"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <nav className="flex items-center space-x-6 lg:space-x-8">
                <Link 
                  to="/" 
                  className="text-sm lg:text-base font-medium text-gray-900 hover:text-orange-500 transition-colors px-3 py-2"
                >
                  Home
                </Link>
                <Link 
                  to="/offers" 
                  className="text-sm lg:text-base font-medium text-gray-900 hover:text-orange-500 transition-colors px-3 py-2"
                >
                  Offers
                </Link>
                <Link 
                  to="/restaurants" 
                  className="text-sm lg:text-base font-medium text-gray-900 hover:text-orange-500 transition-colors px-3 py-2"
                >
                  Foods
                </Link>
                <Link 
                  to="/about" 
                  className="text-sm lg:text-base font-medium text-gray-900 hover:text-orange-500 transition-colors px-3 py-2"
                >
                  About
                </Link>
                <Link 
                  to="/contact" 
                  className="text-sm lg:text-base font-medium text-gray-900 hover:text-orange-500 transition-colors px-3 py-2"
                >
                  Contact
                </Link>
                
                <Link 
                  to="/cart" 
                  className="text-sm lg:text-base font-medium text-gray-900 hover:text-orange-500 transition-colors px-3 py-2"
                >
                  Cart {cartItems.length}
                </Link>
                <h2 className="font-bold px-4">{loggedInUser}</h2>
              </nav>

              <button
                onClick={() => {
                  login === "Log in" ? setLogin("Logout") : setLogin("Log in");
                }}
                className="ml-4 px-4 py-2 bg-orange-500 text-white text-sm lg:text-base font-medium rounded-xl shadow-sm hover:bg-orange-600 active:bg-orange-700 transition-all duration-200"
              >
                {login}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-xl text-gray-600 hover:text-orange-500 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200"
                aria-label="Toggle menu"
              >
                <svg className={`h-6 w-6 transition-transform ${isMenuOpen ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
