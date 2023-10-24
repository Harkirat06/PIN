import { useContext } from "react";
import React from "react";
import { Container, Row, Col, Button, Image, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import imagen from '../images/imagen2.jpg'

function selectBuild(){

    return (
        <Container>
          <Row>
            <Col xs={3}>
              {/* Zona con 3 botones */}
              <Button>GamaBaja</Button>
              <Button>GamaMedia</Button>
              <Button>GamaAlta</Button>
            </Col>
            <Col xs={6}>
              {/* Zona principal con botón e imagen */}
              <div className="main-content">
                <Button>Botón Principal</Button>
                <Image src={imagen} alt="Imagen Principal" fluid />
              </div>
            </Col>
            <Col xs={3}>
              {/* Zona con slider */}
              <Form>
                <Form.Group controlId="slider">
                  <Form.Label>Slider</Form.Label>
                  <Form.Control type="range" min="0" max="10000" />
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      );





}
export default selectBuild;
