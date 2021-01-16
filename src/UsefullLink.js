import React from "react";
import "./UsefullLink.css";
import LinkIcon from "@material-ui/icons/Link";

function UsefullLink({ Icon, text }) {
    return (
        <div className="link">
            <Icon className="link__icon" />
            <a className="link__text" href="#">
                {text}
            </a>
        </div>
    );
}

export default UsefullLink;
