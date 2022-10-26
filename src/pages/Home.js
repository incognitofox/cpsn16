import { useState } from 'react';
import { Outlet, Link, useLocation } from "react-router-dom";
import Papa from "papaparse"
import logo from '../logo.svg'

const allowedExtensions = ["csv"];
const csv = Papa.parse("schools.csv", { header: true })

const Home = () => {
    const state  = useLocation();
    console.log(state)
    return(
    <div className="App-header">
        <p>{state['state']['school']}</p>
    </div>

    );
};

export default Home
