import React, {useState, useEffect} from 'react';

import FighterList from './FighterList';


function FighterContainer() {
 const [ fighters, setFighters] = useState([])
    


useEffect(()=> {
  fetch('http://localhost:3000/fighters')
  .then((response) => response.json())
  .then((data) => setFighters(data));
}, [] )
  console.log(fighters)
  
    return <FighterList fighters={fighters}  />
    
  
  
}


export default FighterContainer;
