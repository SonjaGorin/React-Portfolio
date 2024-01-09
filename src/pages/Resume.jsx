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
        </div>
        
    );
}