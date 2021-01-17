import React from "react";
import "./Card.css";

function Card({ icon, header, content }) {
    return (
        <div className="card">
            <div className="card__imageContainer">
                <img className="card__icon" src={icon} img="icon" />
            </div>
            <p className="card__header">{header}</p>
            <p className="card__content">{content}</p>
        </div>
    );
}

export default Card;
