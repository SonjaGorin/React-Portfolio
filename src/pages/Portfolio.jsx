import PortfolioCard from "../components/PortfolioCard/PortfolioCard";
import WorkDayScheduler from "../../images/work-day-scheduler-screenshot-01.png";
import WeatherDashboard from "../../images/weather-dashboard-screenshot-03.png";
import Cravings from "../../images/cravings-screenshot.png";
import TechBlog from "../../images/tech-blog-screenshot-03.png";
import NoteTaker from "../../images/Note-Taker-Screenshot-05.png";
import PasswordGenerator from "../../images/password-generator-screenshot-03.png";
import "../components/PortfolioCard/PortfolioCard.css";



export default function Portfolio() {
    return (
        <div className="portfolio-page">
            <h1>Portfolio</h1>
            <div>
                <div className="two-cards">
                    <PortfolioCard img={WorkDayScheduler} app={"https://sonjagorin.github.io/Work-Day-Scheduler/"} git={"https://github.com/SonjaGorin/Work-Day-Scheduler"}/>
                    <PortfolioCard img={WeatherDashboard} app={"https://sonjagorin.github.io/Weather-Dashboard/"} git={"https://github.com/SonjaGorin/Weather-Dashboard"}/>
                </div>
                <div className="two-cards">
                    <PortfolioCard img={Cravings} app={"https://craving-510bbff9dcfd.herokuapp.com/"} git={"https://github.com/SonjaGorin/Cravings"}/>
                    <PortfolioCard img={TechBlog} app={"https://technology-blog-sg-b51f56d78026.herokuapp.com/"} git={"https://github.com/SonjaGorin/Tech-Blog"}/>
                </div>
                <div className="two-cards">
                    <PortfolioCard img={NoteTaker} app={"https://murmuring-beyond-80827-82186790f589.herokuapp.com/"} git={"https://github.com/SonjaGorin/Note-Taker?tab=readme-ov-file"}/>
                    <PortfolioCard img={PasswordGenerator} app={"https://sonjagorin.github.io/Password-Generator/"} git={"https://github.com/SonjaGorin/Password-Generator"}/>
                </div>
            </div>
        </div>
    );
}