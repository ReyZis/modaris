import React from "react";
import "./Main.css";
import landingSvg from "./assets/mudarris.net Final-16.svg";

function Main() {
    return (
        <div className="main">
            <div className="main__container">
                <div className="main__left">
                    <h1>Ask For A Private</h1>
                    <h1>Teacher Now</h1>
                    <button className="main__btnWhite -btn">Sign Up</button>
                </div>
                <div className="main__right">
                    <img src={landingSvg} alt="landing svg" />
                </div>
            </div>
        </div>
    );
}

export default Main;
