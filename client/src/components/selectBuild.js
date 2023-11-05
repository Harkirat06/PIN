import { useContext, useState } from "react";
import React from "react";
import { Container, Row, Col, Button, Image, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import imagen from '../images/COOLPC-Gold.jpg';
import './SelectBuild.css';
import axios from "axios";
import { buildPorGama, buildPorPrecio } from "./Axios";
import { useNavigate } from "react-router-dom";

function SelectBuild({ context }) {
    const navigate = useNavigate();
    const [sliderValue, setSliderValue] = useState(0);
    const { build, setBuild, setElementosSeleccionados, elementosSeleccionados } = useContext(context);

    // Función para manejar el cambio en el slider
    const handleSliderChange = (event) => {
        setSliderValue(event.target.value);
    }

    // Al seleccionar una build, establece la build en el contexto
    const selectBuild = (selectedBuild) => {
        setBuild(()=>{
          let conf = {...selectedBuild}
          return [conf]
        });
        setElementosSeleccionados(()=>{
          let elementos = {...elementosSeleccionados[0]}
          Object.keys(selectedBuild).forEach((propiedad)=>{
            if(propiedad == "sata" || propiedad == "m2"){
              if (elementos[propiedad] == "Elemento no seleccionado") {
                elementos["disco"] = []
              }
              selectedBuild[propiedad].forEach((item)=>{
                  elementos["disco"] = elementos["disco"].concat(item.nombre);
              })
            }else{
              elementos[propiedad] = selectedBuild[propiedad].nombre
            }
          })
          return [elementos]
        })
        navigate("/PcBuilder");
    }

    return (
        <Container>
            <Row>
                <Col xs={3}>
                    {/* Zona con 3 botones */}
                    <Button onClick={() => {
                        buildPorGama("baja").then(r => selectBuild(r));
                    }}>GamaBaja </Button>
                    <Button onClick={() => {
                        buildPorGama("media").then(r => selectBuild(r));
                    }}>GamaMedia</Button>
                    <Button onClick={() => {
                        buildPorGama("alta").then(r => selectBuild(r));
                    }}>GamaAlta</Button>
                </Col>
            <Col xs={1  }>
              {/* Zona principal con botón e imagen */}
              <div className="main-content">
                <Button onClick={()=>{
                  setBuild(() => [{}])
                  navigate("/PcBuilder")
                  }}>Construye tu pc de cero
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
            <Button onClick={()=>{
              buildPorPrecio(sliderValue,false).then(r => setBuild(r))
              navigate("/PcBuilder")
              }}>Hacer Build</Button>
          </Col>
        </Col>
      </Row>
    </Container>
      );





}
export default SelectBuild;
