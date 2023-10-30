import React, { useState, useContext } from "react";
import Cardd from "./Card";
import { Container, Row, Col } from "react-bootstrap";
import { getListas } from "./Axios";

function PcBuilder({ context }) {
    const [compatibleComponents, setCompatibleComponents] = useState([]);
    const { build } = useContext(context);

    // Función para cargar componentes compatibles
    const loadCompatibleComponents = async () => {
        try {
            const response = await getListas({ config: build });
      
                setCompatibleComponents(response.data);
           
        } catch (error) {
            console.error("Error al cargar componentes compatibles", error);
        }
    };

    // Llama a la función para cargar componentes compatibles
    loadCompatibleComponents();

    return (
        <Container>
            <h2>Selecciona tus componentes</h2>
            <Row>
                <Col>
                    <div className="computer-preview">
                        {Object.values(build).map((component, index) => (
                            <Cardd key={index} nombre={component.nombre} imagen={component.imagen} />
                        ))}
                    </div>
                </Col>
                <Col>
                    <div className="compatible-components">
                        <h3>Componentes Compatibles</h3>
                        {compatibleComponents.map((componentList, listIndex) => (
                            <div key={listIndex}>
                                {componentList.map((component, index) => (
                                    <Cardd key={index} nombre={component.nombre} imagen={component.imagen} />
                                ))}
                            </div>
                        ))}
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