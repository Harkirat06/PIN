import React from "react";
import Card from 'react-bootstrap/Card';

function Cardd({ nombre, imagen,  }) {
  return (
    <Card
      className="w-100 col-lg-6 col-md-8 col-sm-10"
      onClick={onClick}
    >
      <Card.Img variant="top" src={"/image/" + imagen}  />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default Cardd;
