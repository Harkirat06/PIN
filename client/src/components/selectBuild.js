import { useContext,useState } from "react";
import React from "react";
import { Container, Row, Col, Button, Image, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import imagen from '../images/COOLPC-Gold.jpg'
import './SelectBuild.css'

function SelectBuild(){

    const [sliderValue , setSliderValue] = useState(0);

  // Función para manejar el cambio en el slider
      const handleSliderChange = (event) => {
      setSliderValue(event.target.value);
      }

    return (
        <Container>
          <Row>
            <Col xs={3}>
              {/* Zona con 3 botones */}
              <Button>GamaBaja </Button>
              <Button>GamaMedia</Button>
              <Button>GamaAlta</Button>
            </Col>
            <Col xs={1  }>
              {/* Zona principal con botón e imagen */}
              <div className="main-content">
                <Button>Construye tu pc de cero
                  <img src={imagen} />
                </Button>
                
              </div>
            </Col>
            </Row>
            <Row>
            <Col xs={3}>
            {/* Zona con slider */}
            <Form>
            <Form.Group controlId="slider">
              <Form.Label className="white-text">BuildPrecio</Form.Label>
              <Form.Control type="range" min="0" max="10000" value={sliderValue} onChange={handleSliderChange} />
            </Form.Group>
            <span className="white-text">{sliderValue}</span> {/* Elemento para mostrar el valor actual */}
          </Form>
          <Col>
            <Button>Hacer Build</Button>
          </Col>
        </Col>
      </Row>
    </Container>
      );





}
export default SelectBuild;
