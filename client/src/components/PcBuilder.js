import React, { useState, useContext, useEffect } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { getListas } from "./Axios";
import "./PcBuilder.css";
import "bootstrap/dist/css/bootstrap.min.css";
import OffCanvasCustom from "./OffCanvasCustom";

function PcBuilder({ context }) {
  const {
    listasComponentes,
    setListasComponentes,
    setShow,
    build,
    elementosSeleccionados,
    setElementosSeleccionados,
    setBuild,
    listaComponente,
    setListaComponente,
    nombreLista,
    setNombreLista,
    show,
  } = useContext(context);

  useEffect(() => {
    getListas(build[0]).then((r) => {
      setListasComponentes(r.data);
    });
  }, [build, elementosSeleccionados]);

  const handleBoton = (lista) => {
    setNombreLista(lista);
    setListaComponente(listasComponentes[lista]);
    setShow(true);
  };

  const handleNombre = (lista) => {
    return lista.replace("List", "");
  };

  const deleteSelection = (propiedad, item) => {
    if (Array.isArray(elementosSeleccionados[0][propiedad])) {
      setElementosSeleccionados((prevElementosSeleccionados) => {
        let elementos = { ...prevElementosSeleccionados[0] };
        const updatedArray = elementos[propiedad].filter((i) => i !== item);
        elementos[propiedad] =
          updatedArray.length > 0 ? updatedArray : "Elemento no seleccionado";
        return [elementos];
      });
      setBuild((prevBuild) => {
        let conf = { ...prevBuild[0] };
        if (conf["sata"] && Array.isArray(conf["sata"])) {
          conf["sata"] = conf["sata"].filter((i) => i.nombre !== item);
        }

        if (conf["m2"] && Array.isArray(conf["m2"])) {
          conf["m2"] = conf["m2"].filter((i) => i.nombre !== item);
        }

        setShow(false);
        return [conf];
      });
    } else {
      setElementosSeleccionados((prevElementosSeleccionados) => {
        let elementos = { ...prevElementosSeleccionados[0] };
        elementos[propiedad] = "Elemento no seleccionado";
        return [elementos];
      });
      setBuild((prevBuild) => {
        let conf = { ...prevBuild[0] };
        delete conf[propiedad];
        setShow(false);
        return [conf];
      });
    }
  };

  let i = 0;

  const handleSeleccion = (propiedad) => {
    if (elementosSeleccionados[0][propiedad] !== "Elemento no seleccionado") {
      if (Array.isArray(elementosSeleccionados[0][propiedad])) {
        let i = 0;
        return elementosSeleccionados[0][propiedad].map((item) => {
          return (
            <Card.Text key={i++}>
              {i + "." + " " + item}
              <Button
                variant="danger"
                size="sm"
                onClick={() => deleteSelection(propiedad, item)}
              >
                X
              </Button>
            </Card.Text>
          );
        });
      } else {
        return (
          <Card.Text>
            {elementosSeleccionados[0][propiedad]}
            <Button
              variant="danger"
              size="sm"
              onClick={() => deleteSelection(propiedad)}
            >
              X
            </Button>
          </Card.Text>
        );
      }
    } else {
      return <Card.Text>{elementosSeleccionados[0][propiedad]}</Card.Text>;
    }
  };

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
                let nombre = handleNombre(lista);
                return (
                  <div
                    className="col-6 col-md-4 col-lg-3 d-flex align-items-stretch"
                    key={i++}
                  >
                    <Card onClick={() => handleBoton(lista)}>
                      <Card.Img
                        variant="top"
                        src={"/image/" + nombre + "Icon.png"}
                      />
                      <Card.Body>{handleSeleccion(nombre)}</Card.Body>
                    </Card>
                  </div>
                );
              })}
          </div>
        </div>
      </Container>
      <br />
      <Container>
        <OffCanvasCustom context={context} />
      </Container>
    </Container>
  );
}

export default PcBuilder;
