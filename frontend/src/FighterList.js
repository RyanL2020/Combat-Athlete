import React from "react";
import Fighter from "./Fighter";


const FighterList = ({fighters}) => {
    const listOfFighters = fighters.map(fighter => {
        return <Fighter key={fighter.id} name={fighter.name} style={fighter.style} age={fighter.age} height={fighter.height} weight={fighter.weight} reach={fighter.reach} win={fighter.win} loss={fighter.loss} gender={fighter.gender}/>
    })

    return (
    <div className="fighter-list">
        {listOfFighters}
        {/* { fighters.map(fighter => <Fighter name={fighter.name} image={fighter.style}/>) } */}
    </div>
    )


};

export default FighterList;