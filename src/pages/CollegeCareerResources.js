
const CollegeCareerResources = () => {
    return (
        <div> 
            <h1> College and Career Resources </h1>
            <section class = "ccr-container">
                <div class = "college"> 
                    <h2 class = "college-title"> College Resources </h2>
                    <div class = "college-body"> 
                        <h3 class = ""> SAT study guides </h3>
                        <form action={"https://www.khanacademy.org/sat"}>
                            <button type="submit">{"Khan Academy"}</button>
                        </form>
                        <form action={"https://www.khanacademy.org/sat"}>
                            <button type="submit">{"SAT Prep Courses"}</button>
                        </form>
                        <h3 class = ""> ACT study guides </h3>
                        <form action={"https://www.act.org/content/act/en/products-and-services/the-act/test-preparation/free-act-test-prep.html"}>
                            <button type="submit">{"ACT Online Prep"}</button>
                        </form>
                        <form action={"https://www.khanacademy.org/sat"}>
                            <button type="submit">{"ACT Prep Courses"}</button>
                        </form>
                        <h3 class = ""> College Scholarships </h3>
                        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit saepe sequi, illum facere
                        necessitatibus cum aliquam id illo omnis maxime, totam soluta voluptate amet ut sit ipsum
                        aperiam.
                        Perspiciatis, porro! 
                        </p>
                    </div>
                </div>

                <hr class="hr-line"></hr>

                <div class = "career"> 
                    <h2 class = "career-page"> Career Resources </h2>
                    <div class = "career-body"> 
                        <h3 class = "volunteer"> Volunteer Opportunities </h3>
                        <h3 class = "job-board"> Job Board </h3>
                        <h3 class = "resume"> Resume/CV Templates </h3>
                        <h3 class = "interview"> Interview Prep </h3>
                    </div>
                </div>
               
            </section>
            
        </div>

        

    );
}

export default CollegeCareerResources