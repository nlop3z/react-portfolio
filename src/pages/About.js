import React from "react";
import coverImage from '../assets/cover/cover-image.jpg';
import userImage from '../assets/images/nl.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';


function About() {
    return (
        <section className="">
            <h1 id="about">Nelly Lopez</h1>
            <img src={coverImage} className="hero" alt="cover" />

            <div className="row">

                <div className="col-4 ip-picture">
                    <img src={userImage} className="nl-picture" alt="nellylopez" />
                </div>

                <div className="col-7 nl-desc">
                    <h4>About me</h4>
                    <p>
                        Future Full Stack Web Developer with a demonstrated history of working in the information technology and
                        services industry. Skilled in Public Health, Petroleum, Gas, Customer Relationship Management, and
                        Systems Development Life Cycle.
                    </p>
                    <p>
                        Bachelor of Science (BS) focused in Biological Sciences, from The University of Texas at Austin.
                        Currently enrolled in the University of Texas at Austin Coding Bootcamp for Web Development with a
                        planned graduation date of April 2021.
                </p>
                </div>

            </div>

        </section>
    )
}

export default About;