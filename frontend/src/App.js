import React, {useState, useEffect} from 'react';
import FighterList from './FighterList';


function App() {
  const [ fighters, setFighters] = useState([])
    


useEffect(()=> {
  fetch('http://localhost:3000/fighters')
  .then((response) => response.json())
  .then((data) => setFighters(data));
}, [] )
  console.log(fighters)
  
    return (
      <div>    
    <FighterList fighters={fighters}  />
      <h1>fighters</h1>
     </div>
    

  )
    
}

export default App;
