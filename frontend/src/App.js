import React, {useState, useEffect} from 'react';
import './App.css'
import FighterList from './FighterList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavigationBar from './NavigationBar';



function App() {
  const [ fighters, setFighters] = useState([])
    


useEffect(()=> {
  fetch('http://localhost:3000/fighters')
  .then((response) => response.json())
  .then((data) => setFighters(data));
}, [] )
  console.log(fighters)
  
    return (
      <Container >  
        <Row>   
         
        <NavigationBar />
        <h1>fighters</h1>
       <Col> <FighterList fighters={fighters}  /> </Col> 
      </Row>
      </Container>

  )
    
}

export default App;
