
const CollegeCareerResources = () => {
    return (
        <div> 
            <h1> College and Career Resources </h1>
            <section class = "ccr-container">
                <div class = "college"> 
                    <h2 class = "college-title"> College Resources </h2>
                    <div class = "college-body"> 
                        <h3 class = "sat-study-guides"> SAT study guides </h3>
                        <a href="https://www.khanacademy.org/sat"> Khan Academy </a> <p></p>
                        <form action={"https://www.khanacademy.org/sat"}>
                            <button type="submit">{"SAT Prep Courses"}</button>
                        </form>
                        <a href="https://www.kaptest.com/study/locations/sat/chicago/il/"> Kaplan Study </a>
                        <h3 class = "act-study-guides"> ACT study guides </h3>
                        <a href="https://www.act.org/content/act/en/products-and-services/the-act/test-preparation/free-act-test-prep.html"> ACT Online Prep </a>
                        <form action={"https://www.khanacademy.org/sat"}>
                            <button type="submit">{"ACT Prep Courses"}</button>
                        </form>
                        <h3 class = "scholarships"> College Scholarships </h3>
                        <p> Here are some websites that can guide you to college scholarships: </p>
                        <a href="https://www.scholarships.com"> Scholarships.com </a> <p></p>
                        <a href="https://www.fastweb.com/"> Fastweb </a> <p></p>
                        <a href="https://bigfuture.collegeboard.org/pay-for-college/scholarship-search"> Big Future (College Board) </a> <p></p>
                        <a href="https://www.goingmerry.com"> Going Merry </a> <p></p>
                        <a href="https://scholarshipowl.com"> Scholaship Owl </a> <p></p>
                        <a href="https://bold.org/"> Bold </a> <p></p>
                        <a href="https://www.cappex.com/"> Cappex </a> <p></p>
                        <a href="https://myscholly.com/"> Scholly </a> <p></p>
                        <a href="https://www.careeronestop.org/toolkit/training/find-scholarships.aspx"> CareerOneStop </a>
                    </div>
                </div>

                <hr class="hr-line"></hr>

                <div class = "career"> 
                    <h2 class = "career-page"> Career Resources </h2>
                    <div class = "career-body"> 
                        <h3 class = "volunteer-title"> Volunteer Opportunities </h3>
                        <div class="volunteer-body">
                            <a href="https://www.chicagohopesforkids.org/volunteer.html"> Chicago HOPES for Kids</a>
                        </div>
                        <h3 class = "job-board"> Job Board </h3>
                        <a href="https://www.chicago.gov/city/en/depts/fss/supp_info/job_resources_foryouth.html"> City of Chicago Job Board</a>
                        <h3 class = "resume"> Resume/CV Templates </h3>
                        <h3 class = "interview"> Interview Prep </h3>
                    </div>
                </div>
               
            </section>
            
        </div>

        

    );
}

export default CollegeCareerResources