import React, { useState } from "react";
import Card from 'react-bootstrap/Card';

function Cardd({ nombre, imagen, isSelected, onComponentSelect }) {
  const [selected, setSelected] = useState(isSelected);

  const handleCardClick = () => {
    setSelected(!selected);
    onComponentSelect(nombre, !selected);
  };

  return (
    <Card
      style={{ width: '18rem' }}
      className={selected ? "selected" : ""}
      onClick={handleCardClick}
    >
      <Card.Img variant="top" src={"/image/" + imagen} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default Cardd;