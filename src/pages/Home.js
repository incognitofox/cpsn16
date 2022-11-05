import { useEffect, useState } from 'react';
import { Outlet, Link, useLocation } from "react-router-dom";
import Papa from "papaparse"
import logo from '../logo.svg'

const allowedExtensions = ["csv"];

const Home = () => {
    const state  = useLocation();

 	const [data, setData] = useState([]);
    const [error, setError] = useState("");
	const [file, setFile] = useState("");
	const [rows, setRows] = useState([])
    const [loading, setLoading] = useState(true);
    	
    var school = state['state']['school']
    console.log(school)

	useEffect(() => {
		async function getData() {
		  const response = await fetch('/data/schools.csv')
		  const reader = response.body.getReader()
		  const result = await reader.read() // raw array
		  const decoder = new TextDecoder('utf-8')
		  const csv = decoder.decode(result.value) // the csv text
		  const results = Papa.parse(csv, { header: true }) // object with { data, errors, meta }
		  const rows = results.data // array of objects
		  console.log(rows)
		  setRows(rows)
          setLoading(false)
    	}
        getData()
	}, [loading])

    function loading_html() {
        console.log("loading")
        return(
            <div className="App-header">Loading</div>
        );
    }

    function show_info(row) {
        for (var i = 0; i < rows.length; i ++) {
            if (rows[i]['name'] == school)
                row = rows[i]
        }

        console.log(row)
        return(
            <div className="App-header">
                <a href={row['url']}>{school}</a><p>{row['phone']}</p>
            </div>
        );
    }
    if (loading)
        return loading_html()
    else
        return show_info(rows[0])
       
};

export default Home
