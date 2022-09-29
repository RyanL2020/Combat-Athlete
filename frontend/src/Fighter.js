import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const Fighter = ({image, name, style, age, height, weight, reach, win, loss, gender}) => {
    console.log(name);
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title> {name}</Card.Title>
          <Card.Text>
                <h3>{image}</h3>
                
                <h3>Style: {style}</h3>
                <h3>Age: {age}</h3>
                <h3>Height: {height}</h3>
                <h3>Weight: {weight}</h3>
                <h3>Reach: {reach}</h3>
                <h3>Win: {win}</h3>
                <h3>Loss: {loss}</h3>
                <h3>Gender: {gender}</h3>
            
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    
               
           
    )
};

{/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}

export default Fighter;