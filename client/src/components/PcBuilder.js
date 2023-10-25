import React, { useState, useEffect, useContext } from "react";
import Cards from "./Cards"; 
import Cardd from "./Card"
import { Container, Row, Col } from "react-bootstrap"; 

function PcBuilder({ context }) {
  const [selectedComponents, setSelectedComponents] = useContext(context);
  const [computerImage, setComputerImage] = useContext(context); 

  const handleSelectComponent = (component) => {
    setSelectedComponents((prevSelected) => [...prevSelected, component]);
  };

  const handleDeselectComponent = (component) => {
    setSelectedComponents((prevSelected) =>
      prevSelected.filter((c) => c !== component)
    );
  };

  // Función para ensamblar la imagen del ordenador
  useEffect(() => {
    // Crea un lienzo para dibujar la imagen ensamblada
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  // Establece el tamaño del lienzo
  canvas.width = 800; // Ajusta el ancho según tus necesidades
  canvas.height = 600; // Ajusta la altura según tus necesidades

  // Dibuja los componentes seleccionados en el lienzo
  selectedComponents.forEach((component, index) => {
    const image = new Image();
    image.src = "/image/" + component.imagen;

    const x = index * 200; // Espaciado horizontal entre componentes (ajusta según tus necesidades)
    const y = 0; // La posición vertical se mantiene en la parte superior

    // Dibuja la imagen del componente en el lienzo
    image.onload = () => {
      ctx.drawImage(image, x, y, 200, 300); // Ajusta el ancho y alto según tus necesidades
    };
  });

  // Convierte el lienzo a una imagen base64
  const assembledImage = canvas.toDataURL("image/png");

  // Actualiza el estado con la imagen ensamblada
  setComputerImage(assembledImage);
  }, [selectedComponents]);

  return (
    <Container>
      <h2>Selecciona tus componentes</h2>
      <Row>
        <Col>
          <Cards
            onSelect={handleSelectComponent}
            onDeselect={handleDeselectComponent}
          />
        </Col>
        <Col>
          {/* Muestra las tarjetas de componentes seleccionadas en el lienzo */}
          <div className="computer-preview">
            {selectedComponents.map((component, index) => (
              <Cardd
                key={index}
                nombre={component.nombre}
                imagen={component.imagen}
              />
            ))}
          </div>
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