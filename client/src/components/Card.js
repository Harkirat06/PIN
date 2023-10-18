import { getImage } from "./Axios";
import { useEffect, useState } from "react"; // Asegúrate de importar useState
import imagen2 from "../images/imagen2.jpg"
import Card from 'react-bootstrap/Card'

function Cardd ({ nombre }) {
    const [imagen, setImagen] = useState(null); // Declarar imagen como estado local

  
    useEffect(() => {
        const nombreImagen = 'imagen2.jpg';
        const fetchImagen = async () => {
            const image = await getImage(nombreImagen);
            setImagen(image);
        };
        fetchImagen();
    }, []);
    
    
  

    return (
      <Card style={{ width: '18rem' }}>
        {imagen && <Card.Img variant="top" src={imagen2} />}
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
        </Card.Body>
      </Card>
    );
}

export default Cardd;
