import React,{useContext} from "react";
import { Link } from "react-router-dom";
import "./../styles/navbar.css";
import SearchBar from "./../components/SearchBar";

import { AppContext } from './../pages/Context';

const Navbar = () => {
  const {openModal} = useContext(AppContext);
  
  return (
    <>
      <div className="navbar">
        <div className="leftSide">
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/categories">CATEGORIES</Link>
          
          
        </div>
        <div className="rightSide">
          <SearchBar/>
          
          <button className='btn' onClick={openModal}>Login</button>
        </div>
        </div>
        
    </>
  );
};

export default Navbar;
