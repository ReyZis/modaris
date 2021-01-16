import React from "react";
import "./Header.css";
import logo from "./assets/mudarris.net Final-15.svg";

function Header() {
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__left">
                    <img className="header__logo" src={logo} alt="logo" />
                </div>

                <div className="header__right">
                    <div className="header__options">
                        <div className="header__option">Home</div>
                        <div className="header__option">About us</div>
                        <div className="header__option">How ?</div>
                        <div className="header__option">Teacher?</div>
                        <div className="header__option">Contact</div>
                    </div>

                    <button className="header__btnWhite -btn">Login</button>
                    <button className="header__btnBlue -btn">عربي</button>
                </div>
            </div>
        </div>
    );
}

export default Header;
