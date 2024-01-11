import PortfolioCard from "../components/PortfolioCard/PortfolioCard";
import CalculatorImage from "../../images/calculator.jpg";
import JavaScriptImage from "../../images/JavaScript.jpg";
import LaptopImage from "../../images/laptop.jpg";
import LedWallImage from "../../images/led-wall.png";
import PastelPuzzlesImage from "../../images/pastel-puzzles.jpg";
import RunBuddyImage from "../../images/run-buddy.png";
import "../components/PortfolioCard/PortfolioCard.css";



export default function Portfolio() {
    return (
        <div className="portfolio-page">
            <h1>Portfolio</h1>
            <div>
                <div className="two-cards">
                    <PortfolioCard img={CalculatorImage} app={"https://sonjagorin.github.io/Work-Day-Scheduler/"} git={"https://github.com/SonjaGorin/Work-Day-Scheduler"}/>
                    <PortfolioCard img={JavaScriptImage} app={"https://sonjagorin.github.io/Weather-Dashboard/"} git={"https://github.com/SonjaGorin/Weather-Dashboard"}/>
                </div>
                <div className="two-cards">
                    <PortfolioCard img={LaptopImage} app={"https://craving-510bbff9dcfd.herokuapp.com/"} git={"https://github.com/SonjaGorin/Cravings"}/>
                    <PortfolioCard img={LedWallImage} app={"https://technology-blog-sg-b51f56d78026.herokuapp.com/"} git={"https://github.com/SonjaGorin/Tech-Blog"}/>
                </div>
                <div className="two-cards">
                    <PortfolioCard img={PastelPuzzlesImage} app={"https://murmuring-beyond-80827-82186790f589.herokuapp.com/"} git={"https://github.com/SonjaGorin/Note-Taker?tab=readme-ov-file"}/>
                    <PortfolioCard img={RunBuddyImage} app={"https://sonjagorin.github.io/Password-Generator/"} git={"https://github.com/SonjaGorin/Password-Generator"}/>
                </div>
            </div>
        </div>
    );
}