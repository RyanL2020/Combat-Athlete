import React from "react";



const Fighter = ({image, name, style, age, height, weight, reach, win, loss, gender}) => {
    console.log(name);
    return (
    <div className="fighter">
        <h3>{image}</h3>
        <h3>Name: {name}</h3>
        <h3>Style: {style}</h3>
        <h3>Age: {age}</h3>
        <h3>Height: {height}</h3>
        <h3>Weight: {weight}</h3>
        <h3>Reach: {reach}</h3>
        <h3>Win: {win}</h3>
        <h3>Loss: {loss}</h3>
        <h3>Gender: {gender}</h3>
    </div>
    )
};


export default Fighter;