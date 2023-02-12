const MentalHealthResources = () =>{
    return(
      <div>
        <h1> Mental Health Resources </h1>
            <h2> Brochures</h2>
            <p>Here are some brochures with overviews about mental health resources:</p>
            <form action = {"https://www.cps.edu/globalassets/cps-pages/services-and-supports/health-and-wellness/mental-health/oshw_493250grades-6_12_eng_8.5x11_112922_v5.pdf"}>
                <button type = "submit"> Grades 6-12</button>
            </form>
            <form action = {"https://www.cps.edu/globalassets/cps-pages/services-and-supports/health-and-wellness/mental-health/oshw_493250_mh_grades_3_6_en_8.5x11_112922_v5.pdf"}>
                <button type = "submit"> Grades 3-5</button>
            </form>
            <form action = {"https://www.cps.edu/globalassets/cps-pages/services-and-supports/health-and-wellness/mental-health/student-mental-health-flyer-kdg-english.pdf"}>
                <button type = "submit"> Grades k-2</button>
            </form>
            <h3> Contact </h3>
            <form action={"mailto:mentalhealth@cps.edu"}>
                <button type="submit">Email mentalhealth@cps.edu</button>
            </form>
      </div>  
    )
}
export default MentalHealthResources