import React from "react";
import "./Footer.css";
import Details from "./Details";
import LinkIcon from "@material-ui/icons/Link";
import BookIcon from "@material-ui/icons/Book";
import LinkList from "./LinkList";

function Footer() {
    return (
        <div className="footer">
            <div className="footer__container">
                <Details />
                <LinkList
                    Comp={LinkIcon}
                    list={[
                        "Home",
                        "About Us",
                        "How?",
                        "Teacher?",
                        "Login",
                        "Contact",
                    ]}
                    header="Usfel Links"
                />
                <LinkList
                    Comp={BookIcon}
                    list={["Arabic", "Math", "History", "English"]}
                    header="Last Classes"
                />
            </div>
        </div>
    );
}

export default Footer;
