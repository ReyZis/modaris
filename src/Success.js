import React from "react";
import "./Success.css";

function Success() {
    return (
        <div className="success">
            <p className="success__header">Our Success</p>
            <div className="success__options">
                <div className="success__optionContainer">
                    <p>5</p>
                    <p>Students</p>
                </div>

                <div className="success__optionContainer">
                    <p>4</p>
                    <p>Teachers</p>
                </div>

                <div className="success__optionContainer">
                    <p>2</p>
                    <p>Classes</p>
                </div>
            </div>
        </div>
    );
}

export default Success;
