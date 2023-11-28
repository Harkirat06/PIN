import React, { useState, useContext, useEffect } from "react";
import { Button, Card, Container, Modal, Form } from "react-bootstrap";
import { buildPorPrecio, getListas } from "./Axios";
import "./PcBuilder.css";
import "bootstrap/dist/css/bootstrap.min.css";
import OffCanvasCustom from "./OffCanvasCustom";
import { useNavigate } from "react-router-dom";

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
    user,
  } = useContext(context);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
    getListas(build[0]).then((r) => {
      setListasComponentes(r.data);
      console.log("Actualizada listas")
    });
  }, [build]);

  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  let secondHand = false;

  const [presupuesto, setPresupuesto] = useState(0);

  const handleBoton = (lista) => {
    setNombreLista(lista);
    setListaComponente(listasComponentes[lista]);
    setShow(true);
  };
  const handleAutocomplete = () => {
    buildPorPrecio(presupuesto, false, build).then((selectedBuild) => {
      setBuild(() => {
        let conf = { ...selectedBuild };
        return [conf];
      });
      setElementosSeleccionados(() => {
        let elementos = { ...elementosSeleccionados[0] };
        Object.keys(selectedBuild).forEach((propiedad) => {
          console.log(propiedad)
        })
        Object.keys(selectedBuild).forEach((propiedad) => {
          if (propiedad != "0") {
            if (propiedad == "sata" || propiedad == "m2") {
              if (elementos["disco"] == "Elemento no seleccionado") {
                elementos["disco"] = [];
              }
              selectedBuild[propiedad].forEach((item) => {
                if (!item.price) {console.log("ERROR: " + item + " of type " + propiedad + " does not have price!")}
                const selectedType = getPriceType(item, secondHand);
                elementos["disco"] = elementos["disco"].concat({nombre: item.nombre, selectedType: selectedType, link: item.link[selectedType], selectedPrice: item.precio[selectedType]});
              });
            } else {
              const item = selectedBuild[propiedad];
  
              if (!item.price) {console.log("ERROR: " + item + " of type " + propiedad + " does not have price!")}
              const selectedType = getPriceType(item, secondHand);
              elementos[propiedad] = {nombre: item.nombre, selectedType: selectedType, link: item.link[selectedType], selectedPrice: item.precio[selectedType]};
            }
          }
        });
        return [elementos];
      });
    });

    handleClose();
  };

  const getPriceType = (item, secondHand) => {
    let minPrice = 0;
    if (secondHand && item.precio.segundaMano) {
      minPrice = Math.min(
        item.precio.amazon,
        item.precio.ebay,
        item.precio.segundaMano
      );
    } else {
      minPrice = Math.min(
        item.precio.amazon,
        item.precio.ebay
      );
    }
    if (minPrice == item.precio.amazon) {
      return "amazon";
    } else if (minPrice == item.precio.ebay) {
      return "ebay";
    } else {return "segundaMano"}
  }

  const handleNombre = (lista) => {
    return lista.replace("List", "");
  };

  const deleteSelection = (propiedad, item) => {
    if (Array.isArray(elementosSeleccionados[0][propiedad])) {
      setElementosSeleccionados((prevElementosSeleccionados) => {
        let elementos = { ...prevElementosSeleccionados[0] };
        const updatedArray = elementos[propiedad].filter((i) => i.nombre !== item);
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
              {i + "." + " " + item.nombre}
              <Button
                variant="danger"
                size="sm"
                onClick={() => deleteSelection(propiedad, item.nombre)}
              >
                X
              </Button>
            </Card.Text>
          );
        });
      } else {
        return (
          <Card.Text>
            {elementosSeleccionados[0][propiedad].nombre}
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
      return <Card.Text>{"Elemento no seleccionado"}</Card.Text>;
    }
  };

  return (
    <Container>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Presupuesto para completar la build</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Presupuesto</Form.Label>
          <Form.Control
            type="text"
            placeholder="ej: 1000"
            value={presupuesto}
            onChange={(e) => {
              setPresupuesto(e.target.value);
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAutocomplete}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Container>
        <h1>Pc Builder</h1>
      </Container>
      <Container className="centered">
        <Button onClick={handleShow}>Autocompletar</Button>
      </Container>
      <br />
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
      <Container className="centered">
        <Button size="large" onClick={() => navigate("/paginaPagar")} >Finalizar Montaje</Button>
      </Container>
      <br/>
    </Container>
  );
}

export default PcBuilder;
