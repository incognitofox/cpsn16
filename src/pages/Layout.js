import { Outlet, Link, Route, Routes, useNavigate } from "react-router-dom";
import { useState } from 'react';
import logo from "../logo.svg";


const Layout = () => {
    const navigate = useNavigate();
    var school = "AIR FORCE HS";
    const handleChange = event => {
        school = event.target.value;
    };

    const handleSubmit = event => {
        console.log(school);
        navigate("/home", {state :{'school': school}})
    };
    return(
    <div className="App">
      <header className="Home-header">
        <img src="https://www.cps.edu/globalassets/cps-pages/media/cps-branding/cpslogo_v1_4x4.jpg" alt="CPS16 Logo" width="350"
  height="350"/>
        <h1> Welcome to the CPS Network 16 Website! </h1>
        
      </header>
      <div className="Home-bottom">
          <p> What school do you attend? </p>
            

          <form onSubmit={handleSubmit}>
            <select onChange={handleChange}>
              <option value="AIR FORCE HS">AIR FORCE HS</option>
              <option value="BOGAN HS">BOGAN HS</option>
              <option value="ENGLEWOOD STEM HS">ENGLEWOOD STEM HS</option>
              <option value="FARRAGUT HS">FARRAGUT HS</option>
              <option value="GAGE PARK HS">GAGE PARK HS</option>
              <option value="GOODE HS">GOODE HS</option>
              <option value="HUBBARD HS">HUBBARD HS</option>
              <option value="JULIAN HS">JULIAN HS</option>
              <option value="KELLY HS">KELLY HS</option>
              <option value="KENNEDY HS">KENNEDY HS</option>
              <option value="LINDBLOM HS">LINDBLOM HS</option>
              <option value="MORGAN PARK HS">MORGAN PARK HS</option>
              <option value="RICHARDS HS">RICHARDS HS</option>
              <option value="SPRY HS">SPRY HS</option>
              <option value="TILDEN HS">TILDEN HS</option> 
            </select>
            <input class="Get-started-button" type="submit" value="Get started" />
          </form>
        </div>
      
    </div>

    );
};

export default Layout
