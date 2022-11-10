import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
// import Layout from './Layout';
// import Home from './Home';
// import FighterList from './FighterList';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
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
     
      <BrowserRouter>  
             
          <NavigationBar />
          <h1>fighters</h1>
       
        <Routes>  
                {/* <Route path='/' element= {<Layout />} > </Route>  */}
                {/* <Route path='./Home' element={<Home/>} > </Route>   */}
              {/* <Route path='/fighter' element={<FighterList fighters={fighters} /> } /> */}
        </Routes>
       
        </BrowserRouter>
     
         
  )
    
}

export default App;
{/* <Container>
<Row>
  <Col><FighterCard/></Col>
  <Col><FighterCard/></Col>
</Row>
<Row>
  <Col><FighterCard/></Col>
  <Col><FighterCard/></Col>
  <Col><FighterCard/></Col>
</Row>
</Container> */}
// original return
 // <Container >  
      //   <BrowserRouter>  
      //   <Row>   
      //   <NavigationBar />
      //   <h1>fighters</h1>
      //  <Col> <FighterList fighters={fighters}  /> </Col> 
      //  <Routes>  
      //           {/* <Route path='/' element= > </Route>
      //           <Route path='/' element={<Home/>} > </Route>  */}
      //           <Route path='/fighter' element={<FighterList fighters={fighters} /> } />
      // </Routes>
      // </Row>
      // </BrowserRouter>
      // </Container>
