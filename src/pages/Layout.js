import { Outlet, Link } from "react-router-dom";
import { useState } from 'react';
import logo from "../logo.svg"

const Layout = () => {
    return(
    <div className="App">
      <header className="App-header">
        <h1>CPS Network 16</h1>
          <div>
            <select>
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
          </div>
      </header>
    </div>

    );
};

export default Layout
