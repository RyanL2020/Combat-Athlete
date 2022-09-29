import React from "react";
import Fighter from "./Fighter";


const FighterList = ({fighters}) => {
    const listOfFighters = fighters.map(fighter => {
        return <Fighter key={fighter.id} name={fighter.name} style={fighter.style}/>
    })

    return (
    <div className="fighter-list">
        {listOfFighters}
        {/* { fighters.map(fighter => <Fighter name={fighter.name} image={fighter.style}/>) } */}
    </div>
    )


};

export default FighterList;