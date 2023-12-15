import { useContext, useEffect, useState } from "react";
import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Image,
  Form,
  Alert,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import pc from "./PcPequeño.png";
import "./SelectBuild.css";
import { buildPorGama, buildPorPrecio, buildPorNicho } from "./Axios";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SelectBuild({ context }) {
  const navigate = useNavigate();
  const {
    build,
    setBuild,
    setElementosSeleccionados,
    elementosSeleccionados,
    user,
  } = useContext(context);
  const [presupuesto, setPresupuesto] = useState(0);
  const [show, setShow] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [mostrarSlider, setMostrarSlider] = useState(false);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  let secondHand = false;

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

  // Al seleccionar una build, establece la build en el contexto
  const selectBuild = (selectedBuild, secondHand) => {
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
            const selectedType = getPriceType(item, secondHand);
            elementos["disco"] = elementos["disco"].concat({
              nombre: item.nombre,
              selectedType: selectedType,
              link: item.link[selectedType],
              selectedPrice: item.precio[selectedType],
            });
          });
        } else {
          const item = selectedBuild[propiedad];
          const selectedType = getPriceType(item, secondHand);
          elementos[propiedad] = {
            nombre: item.nombre,
            selectedType: selectedType,
            link: item.link[selectedType],
            selectedPrice: item.precio[selectedType],
          };
        }
      });
      return [elementos];
    });
    navigate("/PcBuilder");
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
      minPrice = Math.min(item.precio.amazon, item.precio.ebay);
    }
    if (minPrice == item.precio.amazon) {
      return "amazon";
    } else if (minPrice == item.precio.ebay) {
      return "ebay";
    } else {
      return "segundaMano";
    }
  };

  const handleOpcionSeleccionada = (opcion) => {
    if (opcion === "opcion1") {
      setMostrarSlider(true);
    } else {
      setMostrarSlider(false);
    }
  };

  return (
    <div className="SelectBuild">
      <div className="header">
        <a>
          <img className="logo" />
        </a>
        <Button
          onClick={() => navigate("/Marketplace")}
          className="custom-color"
          variant="outline-primary"
        >
          Marketplace
        </Button>
      </div>
      {show && (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          {mensaje}
        </Alert>
      )}
      <div className="container-fluid">
        <div className="row">
          {/* Parte izquierda */}
          <div className="col-md-6">
            <div>
              <h2>Let's get started</h2>
              <div className="imagen">
                <img
                  src={pc} // Coloca la URL de tu imagen
                  alt="Imagen"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

          {/* Parte derecha */}
          <div className="col-md-6">
            <div className="d-flex align-items-center justify-content-center h-100">
              <div className="rounded p-3 w-100 h-100 d-flex flex-column">
                {/* Contenido para elegir entre dos opciones */}
                {!mostrarSlider ? (
                  <div className="flex-grow-1">
                    <h3 className="verde">Elige una de las dos opciones</h3>
                    <Button
                      onClick={() => {
                        navigate("/PcBuilder");
                      }}
                    >
                      Build from scratch
                    </Button>
                    <button
                      className="btn btn-secondary"
                      onClick={() => handleOpcionSeleccionada("opcion1")}
                    >
                      Pre-Made Build
                    </button>
                  </div>
                ) : (
                  /* Contenido del slider si se elige la Opción 1 */
                  <Slider {...sliderSettings} className="flex-grow-1">
                    <div>
                      <h1 className="verde">Builds por nichos</h1>
                      <Row>
                        <Col xs={3}>
                          {/* Zona con 3 botones de gamas */}
                          <Button
                            onClick={() => {
                              buildPorNicho("Gamers").then((r) =>
                                selectBuild(r, false)
                              );
                            }}
                          >
                            Gamers
                          </Button>
                          <Button
                            onClick={() => {
                              buildPorNicho("Profesionales").then((r) =>
                                selectBuild(r, false)
                              );
                            }}
                          >
                            Profesionales
                          </Button>
                          <Button
                            onClick={() => {
                              buildPorNicho("Estudiantes").then((r) =>
                                selectBuild(r, false)
                              );
                            }}
                          >
                            Estudiantes
                          </Button>
                          <Button
                            onClick={() => {
                              buildPorNicho("Uso Basico").then((r) =>
                                selectBuild(r, false)
                              );
                            }}
                          >
                            Uso Basico
                          </Button>
                        </Col>
                      </Row>
                    </div>
                    <div>
                      <h1 className="verde">Builds por gama</h1>
                      <Row>
                        <Col xs={3}>
                          {/* Zona con 3 botones de gamas */}
                          <Button
                            onClick={() => {
                              buildPorGama("baja").then((r) =>
                                selectBuild(r, false)
                              );
                            }}
                          >
                            Gama Baja{" "}
                          </Button>
                          <Button
                            onClick={() => {
                              buildPorGama("media").then((r) =>
                                selectBuild(r, false)
                              );
                            }}
                          >
                            Gama Media
                          </Button>
                          <Button
                            onClick={() => {
                              buildPorGama("alta").then((r) =>
                                selectBuild(r, false)
                              );
                            }}
                          >
                            Gama Alta
                          </Button>
                        </Col>
                      </Row>
                    </div>
                    <div>
                      <h3 className="verde">Build por precio</h3>
                      <Row>
                        <Col xs={3}>
                          <Form>
                            <Form.Label style={{ color: "white" }}>
                              Presupuesto
                            </Form.Label>
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
                                buildPorPrecio(presupuesto).then((result) => {
                                  if (result && result.Error) {
                                    // Si buildPorPrecio devuelve un objeto Error, muestra un pop-up con el mensaje de error
                                    setMensaje(result.Error);
                                    setShow(true);
                                  } else {
                                    // Si no es un error, ejecuta selectBuild con el resultado
                                    selectBuild(result, secondHand);
                                  }
                                });
                              }}
                            >
                              Hacer Build
                            </Button>
                          </Col>
                        </Col>
                      </Row>
                    </div>
                  </Slider>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SelectBuild;
