const Calendar = () => {
    return (
        <div> <h1> Google Calendar </h1>
            <p> This is a calendar for events for CPS 16. </p>
            <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&src=Y18yNTY1YjU0ODNmNWM0MDQ1MWM0YmI4NTZiZWRjMWFlNTU1MWExNGUxNzZhYTE0ZDMyZWUyZmEzNTFhMDg1ZjkxQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%239E69AF" width="800" height="600" frameBorder="0" scrolling="no">GCalendar</iframe>
             
        <h1> District Wide Calendar</h1>    
            <form action = {"https://www.cps.edu/globalassets/cps-pages/calendar/cps-2022-2023-calendar-english.pdf"}>
                <button type = "submit"> View Calendar</button>
            </form>
        </div>
        
        

    );
  }
export default Calendar