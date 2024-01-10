import PortfolioCard from "../components/PortfolioCard";
import CalculatorImage from "../../images/calculator.jpg";
import JavaScriptImage from "../../images/JavaScript.jpg";
import LaptopImage from "../../images/laptop.jpg";
import LedWallImage from "../../images/led-wall.png";
import PastelPuzzlesImage from "../../images/pastel-puzzles.jpg";
import RunBuddyImage from "../../images/run-buddy.png";



export default function Portfolio() {
    return (
        <div>
            <h1>Portfolio</h1>
            <PortfolioCard img={CalculatorImage} app={"https://sonjagorin.github.io/Code-Quiz/"} git={"https://github.com/SonjaGorin"}/>
            <PortfolioCard img={JavaScriptImage}/>
            <PortfolioCard img={LaptopImage}/>
            <PortfolioCard img={LedWallImage}/>
            <PortfolioCard img={PastelPuzzlesImage}/>
            <PortfolioCard img={RunBuddyImage}/>
        </div>
    );
}