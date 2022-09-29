import React from "react";



const Fighter = ({image, name, style, age, height, weight, reach, win, loss, gender}) => {
    console.log(name);
    return (
    <div className="fighter">
        <h3>{image}</h3>
        <h3>{name}</h3>
        <h3>{style}</h3>
        <h3>{age}</h3>
        <h3>{height}</h3>
        <h3>{weight}</h3>
        <h3>{reach}</h3>
        <h3>{win}</h3>
        <h3>{loss}</h3>
        <h3>{gender}</h3>

    </div>
    )
};


export default Fighter;