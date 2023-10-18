import { getImage } from "./Axios";
import { useEffect, useState } from "react"; // Asegúrate de importar useState
import Card from 'react-bootstrap/Card'

function Cardd ({ nombre, imagen}) {

    return (
      <Card style={{ width: '18rem' }}>
        {
        <Card.Img variant="top" src={"/image/" + imagen} />}
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
        </Card.Body>
      </Card>
    );
}

export default Cardd;
