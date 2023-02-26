const MentalHealthResources = () =>{
    return(
      <div>
        <h1> Mental Health Resources </h1>
            <h2> Brochures</h2>
            <p>Here are some brochures with overviews about mental health resources:</p>
            <form action = {"https://www.cps.edu/globalassets/cps-pages/services-and-supports/health-and-wellness/mental-health/oshw_493250grades-6_12_eng_8.5x11_112922_v5.pdf"} target="_blank">
                <button type = "submit"> Grades 6-12</button>
            </form>
            <form action = {"https://www.cps.edu/globalassets/cps-pages/services-and-supports/health-and-wellness/mental-health/oshw_493250_mh_grades_3_6_en_8.5x11_112922_v5.pdf"} target="_blank">
                <button type = "submit"> Grades 3-5</button>
            </form>
            <form action = {"https://www.cps.edu/globalassets/cps-pages/services-and-supports/health-and-wellness/mental-health/student-mental-health-flyer-kdg-english.pdf"} target="_blank">
                <button type = "submit"> Grades k-2</button>
            </form>
            <h2>Chicago Public Schools Comprehensive Mental Health and Suicide Prevention Policy</h2>
                <form action = {"https://drive.google.com/file/d/1KAsAx_68NNXk9SjZYAz6rEy4fPoHAn4X/view"} target="_blank">
                    <button typle = "submit"> Read the policy here</button>
                </form>
                
            <h2> Contact </h2>
            <form action={"mailto:mentalhealth@cps.edu"}>
                <button type="submit">Email mentalhealth@cps.edu</button>
            </form>
            <h2>Mental Health Phone Resources</h2>
            <p>National Alliance on Mental Illness (NAMI) Chicago:</p> 
            <a href="tel:1-833-626-4244">1-833-626-4244</a>
            
            <p>Substance Abuse and Mental Health Services Administration:</p>
            <a href="tel: 1-800-662-4357">1-800-662-4357</a>
            <p>National Eating Disorder Association:</p>
            <a href="tel: 1-800-931-2237">1-800-931-2237</a>
            <p>Trevor Project (LGBTQ+ Support):</p>
            <a href="tel: 1-866-488-7386">1-866-488-7386</a>
            <p>National Domestic Violence Hotline:</p>
            <a href="tel: 1-800-799-7233">1-800-799-7233</a>

      </div>  
    )
}
export default MentalHealthResources