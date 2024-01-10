import React from "react";

export default function PortfolioCard(props) {
    console.log(props);
    return(
        <div>
            <img src={props.img}></img>
            <a href={props.app}>PLACEHOLDER</a>
            <a href={props.git}>placeholder</a>
        </div>
    );
}
