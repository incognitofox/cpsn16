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
    var grade = state['state']['grade']
    console.log(school,grade)

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

        var gradetext = ""
        if (grade == "9") {
            gradetext = "Freshman";
        }
        else if (grade == "10") {
            gradetext = "Sophomore";
        }
        else if (grade == "11") {
            gradetext = "Junior";
        }
        else if (grade == "12") {
            gradetext = "Senior";
        }
        
        var ext = "apps/staff"
        if (school == "GOODE HS") {
            ext = "directory"
        }
        else if (school == "SPRY HS") {
            ext = "counseling.html"  // This needs to be changed
        }

        console.log(row)
        return(
            <div className="App-header">
                <div dangerouslySetInnerHTML={{__html: `Welcome, ${school} ${gradetext}!`}} />
                <a href="/"> Not you? Return to home</a>
                <form action={row['url']}>
                    <button class="aaa" type="submit">{`${school} website`}</button>
                </form>
                <form action={`tel:${row['phone']}`}>
                    <button type="submit">{row['phone']}</button>
                </form>
                <form action={`${row["url"]}${ext}`}>
                    <button type="submit"> Staff Directory </button>
                </form>
                <form action={"/calendar"}>
                    <button type="submit"> Event Calendar </button>
                </form>
                <form action ={"/mentalhealthresources"}>
                    <button type="submit"> Mental Health Resources</button>
                </form>
                <form action ={"/academicresources"}>
                    <button type="submit"> Academic Resources</button>
                </form>
                <form action={"/collegecareerresources"}>
                    <button type="submit"> College & Career Resources </button>
                </form>
                <form action ={"/faq"}>
                    <button type="submit"> FAQ</button>
                </form>
            </div>
        );
    }
    if (loading)
        return loading_html()
    else
        return show_info(rows[0])
    
    
};

export default Home
