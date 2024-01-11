import "./PortfolioCard.css"

// renderin a portfolio card that uses props from portfolio page
export default function PortfolioCard(props) {
    return(
        <div className="portfolio-card">
            <img className="portfolio-image" src={props.img}></img>
            <div className="project-links">
                <a href={props.app} className="project-anchor">{props.project}</a>
                <a href={props.git} className="bi bi-github fa-2x git-anchor"></a>
            </div>
        </div>
    );
}
