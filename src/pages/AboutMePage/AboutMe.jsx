import AvatarImage from "../../../images/avatar.png";
import "./AboutMe.css"

export default function AboutMe() {
    return (
        <div className="about-page">
            <h1>About Me</h1>
            {/* setting up an image */}
            <div>
                <img className="avatar" src={AvatarImage} alt="Sonja Gorin avatar photo."></img>
            </div>
            <p>
                Hello! I'm a full stack software developer with a background in education. <br></br>
                I have a certificate in full stack development from Carleton University bootcamp.<br></br>
                My two Bachelor's degrees and experience working as a teacher gave me very valuable knowledge and ability to learn quickly and efficiently, <br></br>
                which have shown to be necessary skills throughout my course.<br></br> I am very excited to continue utilizing my newly obtained 
                expertize as a MERN stack developer.
            </p>
        </div>
    );
}