import React from "react";
import "./UsefullLink.css";

function UsefullLink({ Icon, text }) {
    return (
        <div className="link">
            <Icon className="link__icon" />
            <span className="link__text">
                {text}
            </span>
        </div>
    );
}

export default UsefullLink;
