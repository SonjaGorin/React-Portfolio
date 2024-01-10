import ResumeFile from "../../../images/resume.pdf";
import "./Resume.css"

export default function Resume() {
    return (
        <div className="resume-page">
            <h1>Resume</h1>
            <h3 className="download-text">Click on the button to download my resume</h3>
            <a href={ResumeFile} download>
                <button className="resume-bttn">
                    Resume
                </button>
            </a>
            <div className="proficiencies">
                <div className="front-end-div">
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
                </div>
                <div>
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
            </div>
        </div>
    );
}