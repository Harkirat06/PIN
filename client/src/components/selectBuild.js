import { useContext, useEffect, useState } from "react";
import React from "react";
import { Container, Row, Col, Button, Image, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import imagen from "../images/COOLPC-Gold.jpg";
import "./SelectBuild.css";
import { buildPorGama, buildPorPrecio, buildPorNicho } from "./Axios";
import { useNavigate } from "react-router-dom";

function SelectBuild({ context }) {
  const navigate = useNavigate();
  const [sliderValue, setSliderValue] = useState(0);
  const {
    build,
    setBuild,
    setElementosSeleccionados,
    elementosSeleccionados,
    user,
  } = useContext(context);
  const [presupuesto, setPresupuesto] = useState(0)

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
    setBuild(() => {
      return [{}];
    });
    setElementosSeleccionados(() => {
      let elementos = [
        {
          placas: "Elemento no seleccionado",
          cpu: "Elemento no seleccionado",
          gpu: "Elemento no seleccionado",
          ram: "Elemento no seleccionado",
          disipador: "Elemento no seleccionado",
          fuente: "Elemento no seleccionado",
          disco: "Elemento no seleccionado",
          caja: "Elemento no seleccionado",
          monitor: "Elemento no seleccionado",
          teclado: "Elemento no seleccionado",
          raton: "Elemento no seleccionado",
        },
      ];
      return elementos;
    });
  }, []);

  // Función para manejar el cambio en el slider
  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  // Al seleccionar una build, establece la build en el contexto
  const selectBuild = (selectedBuild) => {
    setBuild(() => {
      let conf = { ...selectedBuild };
      return [conf];
    });
    setElementosSeleccionados(() => {
      let elementos = { ...elementosSeleccionados[0] };
      Object.keys(selectedBuild).forEach((propiedad) => {
        if (propiedad == "sata" || propiedad == "m2") {
          if (elementos["disco"] == "Elemento no seleccionado") {
            elementos["disco"] = [];
          }
          selectedBuild[propiedad].forEach((item) => {
            elementos["disco"] = elementos["disco"].concat(item.nombre);
          });
        } else {
          elementos[propiedad] = selectedBuild[propiedad].nombre;
        }
      });
      return [elementos];
    });
    navigate("/PcBuilder");
  };

  return (
    <Container>
      <h1>Builds por nichos</h1>
      <Row>
        <Col xs={3}>
          {/* Zona con 3 botones de gamas */}
          <Button
            onClick={() => {
              buildPorNicho("Gamers").then((r) => selectBuild(r));
            }}
          >
            Gamers
          </Button>
          <Button
            onClick={() => {
              buildPorNicho("Profesionales").then((r) => selectBuild(r));
            }}
          >
            Profesionales
          </Button>
          <Button
            onClick={() => {
              buildPorNicho("Estudiantes").then((r) => selectBuild(r));
            }}
          >
            Estudiantes
          </Button>
          <Button
            onClick={() => {
              buildPorNicho("Uso Basico").then((r) => selectBuild(r));
            }}
          >
            Uso Basico
          </Button>
        </Col>
      </Row>
      <h1>Builds por gama</h1>
      <br />
      <Row>
        <Col xs={3}>
          {/* Zona con 3 botones de gamas */}
          <Button
            onClick={() => {
              buildPorGama("baja").then((r) => selectBuild(r));
            }}
          >
            Gama Baja{" "}
          </Button>
          <Button
            onClick={() => {
              buildPorGama("media").then((r) => selectBuild(r));
            }}
          >
            Gama Media
          </Button>
          <Button
            onClick={() => {
              buildPorGama("alta").then((r) => selectBuild(r));
            }}
          >
            Gama Alta
          </Button>
        </Col>
      </Row>
      <br />
      <h1>Build desde cero</h1>
      <Row>
        <Col xs={1}>
          <div className="main-content">
            <Button
              onClick={() => {
                navigate("/PcBuilder");
              }}
            >
              Construye tu pc de cero
              <Button />
            </Button>
          </div>
        </Col>
      </Row>
      <br />
      <h1>Build por precio</h1>
      <Row>
        <Col xs={3}>
          <Form>
            <Form.Label style={{ color: "white" }}>Presupuesto</Form.Label>
            <Form.Control
              type="text"
              placeholder="ej: 1000"
              value={presupuesto}
              onChange={(e) => {
                setPresupuesto(e.target.value);
              }}
            />
          </Form>
          <Col>
            <Button
              onClick={() => {
                buildPorPrecio(presupuesto).then((r) => selectBuild(r));
                navigate("/PcBuilder");
              }}
            >
              Hacer Build
            </Button>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}
export default SelectBuild;
