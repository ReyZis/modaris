import React from "react";
import "./WhyUs.css";
import books from "./assets/mudarris.net Final-19.svg";
import board from "./assets/mudarris.net Final-20.svg";
import teacher from "./assets/mudarris.net Final-21.svg";
import Card from "./Card";

function WhyUs() {
    return (
        <div className="why">
            <p className="why__header">Why Us</p>
            <div className="why__cards">
                <Card
                    icon={books}
                    header="All the subjects"
                    content="Lorem Ipsum Dolor Set Amit Elite. Doyce Erat Nick. Ott Loportes, Magna Nick Roncos, Nick Quam Mattis Ipsum, Phil Erat Villette at Diam."
                />

                <Card
                    icon={board}
                    header="Follow up system"
                    content="Lorem Ipsum Dolor Set Amit Elite. Doyce Erat Nick. Ott Loportes, Magna Nick Roncos, Nick Quam Mattis Ipsum, Phil Erat Villette at Diam."
                />

                <Card
                    icon={teacher}
                    header="Best teachers"
                    content="Lorem Ipsum Dolor Set Amit Elite. Doyce Erat Nick. Ott Loportes, Magna Nick Roncos, Nick Quam Mattis Ipsum, Phil Erat Villette at Diam."
                />
            </div>
        </div>
    );
}

export default WhyUs;
