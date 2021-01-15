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
                        <div className="header__option">home</div>
                        <div className="header__option">about us</div>
                        <div className="header__option">how ?</div>
                        <div className="header__option">teacher?</div>
                        <div className="header__option">contact</div>
                    </div>

                    <button className="header__btnWhite -btn">Login</button>
                    <button className="header__btnBlue -btn">عربي</button>
                </div>
            </div>
        </div>
    );
}

export default Header;
