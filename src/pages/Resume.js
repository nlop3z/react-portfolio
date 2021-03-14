import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Resume = () => (
  <div>
    <h1 className="resume-list">Resume</h1>

    <div className="resume-link">
    <a href="https://www.google.com" target="blank" alt="Resume">Download my Resume</a>
    </div>

    <div className="resume-main">
        <div>
            <h4 className="">Skills</h4>
        </div>

        <div>
            <p>Full Stack Web Developer currently enrolled in the University of Texas at Austin Coding Bootcamp for Web Development that focuses on front-end, server-side and database architecture.</p>
        </div>

        <div>
            <h5 className="header-space">Front-end Proficiences:</h5>
        </div>
        <div>
            <ul>HTML</ul>
            <ul>CSS</ul>
            <ul>JavaScript</ul>
            <ul>jQuery</ul>
            <ul>Responsive Design</ul>
            <ul>React.js</ul>
            <ul>Bootstrap</ul>
            <ul>IndexedDB</ul>
            <ul>Handlebars</ul>
            <ul>Session Storage</ul>
            <ul>Local Storage</ul>            
        </div>

        <div>
            <h5 className="header-space">Back-end Proficiences:</h5> 
        </div>
        <div>
            <ul>APIs</ul>
            <ul>Node</ul>
            <ul>Express</ul>
            <ul>MySQL</ul>
            <ul>Sequelize</ul>
            <ul>MongoDB</ul>
            <ul>Mongoose</ul>
            <ul>REST</ul>
            <ul>GraphQL</ul>            
        </div>
    </div>

  </div>
);

export default Resume;