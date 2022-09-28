import React from "react";
import Fighter from "./Fighter";


const FighterList = ({fighters}) => (
    <div className="fighter-list">
        { fighters.map(fighter => <Fighter name={fighter.name} image={fighter.image_url}/>) }
    </div>


)

export default FighterList;