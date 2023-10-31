import React from "react";
import Card from 'react-bootstrap/Card';

function Cardd({ nombre, imagen, onClick }) {
  return (
    <Card
      style={{ width: '18rem' }}
      onClick={onClick}
    >
      <Card.Img variant="top" src={"/image/" + imagen} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default Cardd;
