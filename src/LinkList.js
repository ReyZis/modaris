import React from "react";
import "./LinkList.css";
import UsefullLink from "./UsefullLink";

function LinkList({ Comp, list, header }) {
    return (
        <div className="list">
            <p className="list__header">{header}</p>
            {list.map((text) => (
                <UsefullLink Icon={Comp} text={text} />
            ))}
        </div>
    );
}

export default LinkList;
