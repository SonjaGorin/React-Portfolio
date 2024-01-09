import React from "react";
import ResumeFile from "../../images/resume.pdf";

export default function Resume() {
    return (
        <div>
            <h1>Resume</h1>
            <h2>Click on the button to download my resume</h2>
            <a href={ResumeFile} download>
                <button>
                    Resume
                </button>
            </a>
            <h2>Front-end Proficiencies</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>Responsive Design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
            <h2>Back-end Proficiencies</h2>
            <ul>
                <li>APIs</li>
                <li>NodeJS</li>
                <li>Express</li>
                <li>Model View Controller (MVC)</li>
                <li>MySQL</li>
                <li>Sequelize</li>
                <li>Progressive Web Applications (PWA)</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>
        </div>
    );
}