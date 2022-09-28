import React from "react";
import Fighter from "./Fighter";


const FighterList = ({fighters}) => (
    <div className="fighter-list">
        { fighters.map(fighter => <Fighter name={fighter.name} image={fighter.style}/>) }
    </div>


)

export default FighterList;