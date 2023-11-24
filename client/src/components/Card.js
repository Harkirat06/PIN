import React from "react";
import {Card, Button} from 'react-bootstrap';

function Cardd({ nombre, imagen, onClick, precio }) {
  return (
    <Card
      className="w-100 col-lg-6 col-md-8 col-sm-10"
    >
      <Card.Img variant="top" src={"/image/" + imagen}  />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text className="mb-2">
          {precio.amazon &&
            <Button variant="primary" size="sm" onClick={onClick}>
              Amazon: {precio.amazon} €
            </Button>
          }
        </Card.Text>
        <Card.Text className="mb-2">
          {precio.ebay &&
            <Button variant="primary" size="sm" onClick={onClick}>
              Ebay: {precio.ebay} €
            </Button>
          }
        </Card.Text>
        <Card.Text className="mb-2">
          {precio.segundaMano && 
            <Button variant="primary" size="sm" onClick={onClick}>
              Segunda mano: {precio.segundaMano} €
            </Button>
          }
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cardd;
