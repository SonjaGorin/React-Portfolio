import AvatarImage from "../../../images/avatar.png";
import "./AboutMe.css"

export default function AboutMe() {
    return (
        <div>
            <h1>About Me</h1>
            <div>
                <img className="avatar" src={AvatarImage} alt="Sonja Gorin avatar photo."></img>
            </div>
            <p>
                Hello! I'm a full stack software developer with a background in education. 
                I have a certificate in full stack development from Carleton University bootcamp.
                My two Bachelor's degrees and experience working as a teacher gave me very valuable knowledge and ability to learn quickly and efficiently,
                which have shown to be necessary skills throughout my course. I am very excited to continue utilizing my newly obtained 
                expertize as a MERN stack developer.
            </p>
        </div>
    );
}