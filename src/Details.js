import React from "react";
import "./Details.css";
import footerImg from "./assets/mudarris.net Final-15.svg";
import SettingsIcon from "@material-ui/icons/Settings";
import UsefullLink from "./UsefullLink";

function Details() {
    return (
        <div className="details">
            <img src={footerImg} alt="footer brand" />
            <p className="details__content">
                Lorem Ipsum Dolor Set Amit Elite. Doyce Erat Nick. Ott Loportes,
                Magna Nick Roncos, Nick Quam Mattis Ipsum, Phil Erat Villette at
                Diam.
            </p>
            <UsefullLink Icon={SettingsIcon} text="Privacy Policy" />
        </div>
    );
}

export default Details;
