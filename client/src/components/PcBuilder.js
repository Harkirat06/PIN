import React, { useState, useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import { getListas } from "./Axios";
import Button from "react-bootstrap/Button";
import "./PcBuilder.css";
import "bootstrap/dist/css/bootstrap.min.css";
import OffCanvasCustom from "./OffCanvasCustom";


function PcBuilder({ context }) {
  const { listasComponentes, setListasComponentes, setShow} = useContext(context);
  const [ listaComponente, setListaComponente] = useState([]);
  const [ nombreLista, setNombreLista ] = useState("")
  useEffect(() => {
    getListas().then((r) => setListasComponentes(r.data));
  }, []);

  const handleBoton =(lista)=>{
    setNombreLista(lista)
    setListaComponente(listasComponentes[lista])
    setShow(true)
  }
  let i = 0

  return (
    <Container>
      <Container>
        <h1>Pc Builder</h1>
      </Container>
      <Container>
      <div className="container justify-content-center align-items-center">
          <div className="row g-4">
        {listasComponentes &&
          Object.keys(listasComponentes).map(lista=>{
            return (
              <div
                  className="col-4 col-md-2 col-lg-2 d-flex align-items-stretch"
                  key={i++}
                >
              <Button variant="primary" onClick={()=>handleBoton(lista)}>
                {lista}
              </Button>
              </div>
            )
          })
        }
          </div>
        </div>
        <OffCanvasCustom context={context} list={listaComponente} nombreLista={nombreLista} />
      </Container>
    </Container>
  );
}

export default PcBuilder;
