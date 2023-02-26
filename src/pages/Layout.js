import { Outlet, Link, Route, Routes, useNavigate } from "react-router-dom";
import { useState } from 'react';
import logo from "../logo.svg";


const Layout = () => {
    const navigate = useNavigate();
    var school = "AIR FORCE HS";
    var grade = "9";
    const handleChange = event => {
        school = event.target.value;
    };
    const handleGrade = event => {
        grade = event.target.value;
    };

    const handleSubmit = event => {
        console.log(school);
        navigate("/home", {state :{'school': school, 'grade':grade}})
    };
    return(
    <div className="App">
      <header className="Home-header">
        <img src="https://www.cps.edu/globalassets/cps-global-media/cps-logos/2022/cps-logo-2022_cpsblue.svg"
        alt="CPS16 Logo" width="300" height="212"/>
        <h1> Welcome to the CPS Network 16 Website! </h1>
        <p> We make academic and mental health resources accessible to CPS high school students like you. </p>
        <form action={"/academicresources"}>
          <button type="submit"> Academic Resources </button>
        </form>
        <form action={"/collegecareerresources"}>
          <button type="submit"> College & Career Resources </button>
        </form>
        <form action={"/mentalhealthresources"}>
            <button type = "submit"> Mental Health Resources </button>
        </form>
        <p></p>
      </header>
      <div className="Home-bottom">
          <p> Looking for more? Select your school and grade: </p>
            

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
            <select onChange={handleGrade}>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
            <input class="Get-started-button" type="submit" value="Get started" />
          </form>
        </div>
      
    </div>

    );
};

export default Layout
