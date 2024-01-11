import "./PortfolioCard.css"

export default function PortfolioCard(props) {
    return(
        <div className="portfolio-card">
            <img className="portfolio-image" src={props.img}></img>
            <a href={props.app}>PLACEHOLDER</a>
            <a href={props.git}>placeholder</a>
        </div>
    );
}
