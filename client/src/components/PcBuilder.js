import React, { useState, useContext, useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import { getListas } from "./Axios";
import Button from "react-bootstrap/Button";
import "./PcBuilder.css";
import "bootstrap/dist/css/bootstrap.min.css";
import OffCanvasCustom from "./OffCanvasCustom";

function PcBuilder({ context }) {
  const { listasComponentes, setListasComponentes, setShow, build } =
    useContext(context);
  const [listaComponente, setListaComponente] = useState([]);
  const [nombreLista, setNombreLista] = useState("");
  useEffect(() => {
    getListas().then((r) => setListasComponentes(r.data));
    console.log(build);
  }, []);

  const handleBoton = (lista) => {
    setNombreLista(lista);
    setListaComponente(listasComponentes[lista]);
    setShow(true);
  };
  const handleNombre = (lista)=>{ return lista.replace("List", "");}
  let i = 0;

  return (
    <Container>
      <Container>
        <h1>Pc Builder</h1>
      </Container>
      <Container>
        <div className="container justify-content-center align-items-center">
          <div className="row g-4">
            {listasComponentes &&
              Object.keys(listasComponentes).map((lista) => {
                let nombre = handleNombre(lista)
                return (
                  <div
                    className="col-4 col-md-2 col-lg-2 d-flex align-items-stretch"
                    key={i++}
                  >
                    <Card>
                      <Card.Img variant="top" src={"/image/" + nombre + "Icon.png"} />
                      <Card.Body>
                        <Card.Text>{"Elemento no Seleccionado"}</Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
          </div>
        </div>
      </Container>
      <br />
      <Container>
        <div className="container justify-content-center align-items-center">
          <div className="row g-4">
            {listasComponentes &&
              Object.keys(listasComponentes).map((lista) => {
                return (
                  <div
                    className="col-4 col-md-2 col-lg-2 d-flex align-items-stretch"
                    key={i++}
                  >
                    <Button
                      variant="primary"
                      onClick={() => handleBoton(lista)}
                    >
                      {lista}
                    </Button>
                  </div>
                );
              })}
          </div>
        </div>
        <OffCanvasCustom
          context={context}
          list={listaComponente}
          nombreLista={nombreLista}
        />
      </Container>
    </Container>
  );
}

export default PcBuilder;
