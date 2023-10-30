import React, { useState, useEffect, useContext } from "react";
import Cardd from "./Card";
import { Container, Row, Col } from "react-bootstrap";
import { getListas } from "./Axios";

function PcBuilder({context}) {
  const [selectedComponents, setSelectedComponents] = useState([]);
  const [computerImage, setComputerImage] = useState(null);
  const [items, setItems] = useState([]);
  const {build,setBuild} = useContext(context)
  
  const handleComponentSelect = (component) => {
    if (!selectedComponents.includes(component)) {
      setSelectedComponents([...selectedComponents, component]);
    }
  };

  const handleComponentDeselect = (component) => {
    setSelectedComponents(selectedComponents.filter((selected) => selected !== component));
  };
  
  return (
    <Container>
      <h2>Selecciona tus componentes</h2>
      <Row>
        <Col>
          <div className="computer-preview">
            {Object.values(build).map((component, index) => (
              <Cardd
              key={index}
              nombre={component.nombre}
              imagen={component.imagen}
              isSelected={selectedComponents.includes(component)}
              onComponentSelect={() => handleComponentSelect(component)}
              />
            ))}
          </div>
        </Col>
        <Col xs={4}>
          <div className="selected-components">
            <h2>Componentes Seleccionados</h2>
            <ul>
            {selectedComponents.map((component, index) => (
              <li key={index}>
                <Cardd
                  
                  nombre={component.nombre}
                  imagen={component.imagen}
                  isSelected={true} // Puedes establecer isSelected a true para indicar que está seleccionado
                  onComponentSelect={() => handleComponentDeselect(component)} // Maneja la deselección
                  // Puedes pasar otras propiedades del componente si es necesario
                />
              </li>
            ))}
          </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default PcBuilder;

/*useEffect(() => {
    getListas().then((res) => {
      let array = [];
      let objects = Object.values(res.data);
      objects.forEach((item) => (array = array.concat(item)));
      setItems(array);
    });
  }, []);

  const handleSelectComponent = (component) => {
    setSelectedComponents((prevSelected) => [...prevSelected, component]);
  };

  const handleDeselectComponent = (component) => {
    setSelectedComponents((prevSelected) =>
      prevSelected.filter((c) => c !== component)
    );
  };

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 800; // Ancho del lienzo
    canvas.height = 600; // Alto del lienzo

    selectedComponents.forEach((component, index) => {
      const item = items.find((item) => item.nombre === component.nombre);

      if (item) {
        const image = new Image();
        image.src = "/image/" + item.imagen;

        const x = index * 200; // Espaciado horizontal entre componentes
        const y = 0; // La posición vertical se mantiene en la parte superior

        image.onload = () => {
          ctx.drawImage(image, x, y, 200, 300); // Ajusta el ancho y alto según tus necesidades
        };
      }
    });

    const assembledImage = canvas.toDataURL("image/png");
    setComputerImage(assembledImage);
  }, [selectedComponents, items]);*/