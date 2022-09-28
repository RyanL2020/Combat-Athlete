import React from "react";



const Fighter = ({name, style}) => {
    console.log(name);
    return (
    <div className="fighter">
         <h3>{name}</h3>
        <h3>{style}</h3>
    </div>
    )
};


export default Fighter;