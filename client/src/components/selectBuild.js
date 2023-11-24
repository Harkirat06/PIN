import { useContext, useEffect, useState } from "react";
import React from "react";
import { Container, Row, Col, Button, Image, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import imagen from '../images/COOLPC-Gold.jpg';
import './SelectBuild.css';
import { buildPorGama, buildPorPrecio, buildPorNicho } from "./Axios";
import { useNavigate } from "react-router-dom";

function SelectBuild({ context }) {
    const navigate = useNavigate();
    const [sliderValue, setSliderValue] = useState(0);
    const { build, setBuild, setElementosSeleccionados, elementosSeleccionados, user } = useContext(context);

    useEffect(()=>{
      if(!user){
        navigate("/")
      }
    },[])

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
              if (elementos["disco"] == "Elemento no seleccionado") {
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
                    {/* Zona con 3 botones de gamas */}
                    <Button onClick={() => {
                        buildPorNicho("Gamers").then(r => selectBuild(r));
                    }}>Gamers</Button>
                    <Button onClick={() => {
                        buildPorNicho("Profesionales").then(r => selectBuild(r));
                    }}>Profesionales</Button>
                    <Button onClick={() => {
                        buildPorNicho("Estudiantes").then(r => selectBuild(r));
                    }}>Estudiantes</Button>
                    <Button onClick={() => {
                        buildPorNicho("Uso Basico").then(r => selectBuild(r));
                    }}>Uso Basico</Button>
                </Col>
            </Row>
            <Row>
                <Col xs={3}>
                    {/* Zona con 3 botones de gamas */}
                    <Button onClick={() => {
                        buildPorGama("baja").then(r => selectBuild(r));
                    }}>Gama Baja </Button>
                    <Button onClick={() => {
                        buildPorGama("media").then(r => selectBuild(r));
                    }}>Gama Media</Button>
                    <Button onClick={() => {
                        buildPorGama("alta").then(r => selectBuild(r));
                    }}>Gama Alta</Button>
                </Col>
                <Col xs={1}>
                    {/* Zona principal con botón e imagen */}
                    <div className="main-content">
                        <Button onClick={()=>{navigate("/PcBuilder")}}>Construye tu pc de cero
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
