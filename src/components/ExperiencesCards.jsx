import React from "react"

import "../styles/experiencesCards.css"

export function ExperiencesCards(props) {
    return (

        <div id="cards">
            <div className="experienceCard">
                <a href="">{props.icon} {props.icon2} {props.icon3}</a>
                <h1>{props.title}</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </p>
            </div>
        </div>
    )
}