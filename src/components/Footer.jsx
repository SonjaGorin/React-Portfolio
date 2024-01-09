import React from "react";
import GitHubImage from "../../images/GitHub-logo-transparent.png";
import LinkedInImage from "../../images/LinkedIn-logo-initials.png";
import TwitterImage from "../../images/twitter-logo-transparent.png";

function Footer() {
    return (
      <footer className="footer">
        <h1>Footer</h1>
        <div className="pop-on-hover">
            <a href="https://github.com/SonjaGorin" target="_blank">
                <img src={GitHubImage} alt="GitHub logo."></img>
            </a>
        </div>
        <div>
            <a href="https://ca.linkedin.com/" target="_blank">
                <img src={LinkedInImage} alt="Linked In logo."></img>
            </a>
        </div>
        <div>
            <a href="https://twitter.com/?lang=en" target="_blank">
                <img src={TwitterImage} alt="Twitter/X logo."></img>
            </a>
        </div>
      </footer>
    );
  }
  
  export default Footer;