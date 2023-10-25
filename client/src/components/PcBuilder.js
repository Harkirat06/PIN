import React, { useState, useEffect } from "react";
import Cards from "./Cards"; 
import { Container, Row, Col } from "react-bootstrap"; 
import { getListas } from "./Axios";

function PcBuilder({ context }) {
  const [selectedComponents, setSelectedComponents] = useState({});
  const [computerImage, setComputerImage] = useState(null); // Utilizamos null en lugar de una cadena vacía

  // Función para manejar la selección de componentes
  const handleSelectComponent = (componentType, component) => {
    setSelectedComponents((prevSelected) => ({
      ...prevSelected,
      [componentType]: component,
    }));
  };

  // Función para ensamblar la imagen del ordenador
  useEffect(() => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    // Tamaño de la imagen y tamaño de cada tarjeta (ajusta según tus necesidades)
    const imageWidth = 800;
    const imageHeight = 600;
    const cardWidth = 200;
    const cardHeight = 300;

    // Establece el tamaño del lienzo
    canvas.width = imageWidth;
    canvas.height = imageHeight;

    // Dibujar las imágenes de los componentes en el lienzo
    let xOffset = 0;
    for (const componentType in selectedComponents) {
      const component = selectedComponents[componentType];
      if (component && component.image) {
        const image = new Image();
        image.src = component.image;

        // Dibuja la imagen en la posición actual (xOffset)
        ctx.drawImage(image, xOffset, 0, cardWidth, cardHeight);

        // Incrementa la posición para la siguiente tarjeta
        xOffset += cardWidth;
      }
    }

    // Convertir el lienzo a una imagen base64
    const assembledImage = canvas.toDataURL("image/png");
    setComputerImage(assembledImage);
  }, [selectedComponents]);

  return (
    <Container>
      <h2>Selecciona tus componentes</h2>
      <Row>
        {/* Muestra las tarjetas de componentes y pasa la función de selección */}
        <Col>
        <Cards context={context}>
            onSelect={handleSelectComponent}
        </Cards>
          {/* Repite este proceso para otros tipos de componentes (RAM, GPU, etc.) */}
        </Col>
      </Row>
      <div className="computer-preview">
        {/* Muestra la imagen del ordenador ensamblado */}
        {computerImage && <img src={computerImage} alt="Ordenador ensamblado" />}
      </div>
      
    </Container>
  );
}

export default PcBuilder;