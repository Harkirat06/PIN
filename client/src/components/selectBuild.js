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
            const selectedType = getPriceType(item);
            elementos["disco"] = elementos["disco"].concat({
              nombre: item.nombre,
              selectedType: selectedType,
              link: item.link[selectedType],
              selectedPrice: item.precio[selectedType],
            });
          });
        } else {
          const item = selectedBuild[propiedad];
          const selectedType = getPriceType(item);
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

  const getPriceType = (item) => {
    let minPrice = 0;
    if (item.precio.segundaMano) {
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
              <h2>¡Empecemos!</h2>
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
          <div className="col-md-6 align-items-center justify-content-center">
            <div className="rounded p-3 w-100 h-100 d-flex flex-column contenedor">
              {/* Contenido para elegir entre dos opciones */}
              {!mostrarSlider ? (
                <div className="flex-grow-1">
                  <h3>Elige una de las dos opciones</h3>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginBottom: "20px",
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <b>Build desde cero:</b>
                      <p>
                        Hecho para usuarios más experimentados. Elige los
                        componentes a tu gusto.
                      </p>
                      <p>
                        Si lo deseas, puedes elegir un componente concreto y
                        clicar en "Autobuild". Nosotros elegiremos los
                        componentes óptimos para el resto de la build.
                      </p>
                    </div>
                    <div style={{ flex: 1 }}>
                      <b>Build prefabricada:</b>
                      <p>
                        Hecho para principiantes o personas con menos tiempo.
                        Danos algunos detalles sobre tus necesidades.
                        Construiremos un PC de acuerdo a tu presupuesto, gustos
                        y necesidades.
                      </p>
                      <p>Podrás cambiar los componentes más tarde.</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div className="btnContainer" style={{ flex: 1 }}>
                      <Button
                        className="boton-verde"
                        onClick={() => {
                          navigate("/PcBuilder");
                        }}
                      >
                        Build desde cero
                      </Button>
                    </div>
                    <div className="btnContainer" style={{ flex: 1 }}>
                      <Button
                        className="boton-verde"
                        onClick={() => handleOpcionSeleccionada("opcion1")}
                      >
                        Build prefabricada
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                /* Contenido del slider si se elige la Opción 1 */
                <Slider {...sliderSettings} className="flex-grow-1">
                  <div>
                    <h3>Builds por nicho</h3>
                    <div>
                      <Button
                        className="gamaNichoBtn"
                        onClick={() => {
                          buildPorNicho("Gamers").then((r) =>
                            selectBuild(r, false)
                          );
                        }}
                      >
                        Gamers
                      </Button>
                      <Button
                        className="gamaNichoBtn"
                        onClick={() => {
                          buildPorNicho("Profesionales").then((r) =>
                            selectBuild(r, false)
                          );
                        }}
                      >
                        Profesionales
                      </Button>
                      <Button
                        className="gamaNichoBtn"
                        onClick={() => {
                          buildPorNicho("Estudiantes").then((r) =>
                            selectBuild(r, false)
                          );
                        }}
                      >
                        Estudiantes
                      </Button>
                      <Button
                        className="gamaNichoBtn"
                        onClick={() => {
                          buildPorNicho("Uso Basico").then((r) =>
                            selectBuild(r, false)
                          );
                        }}
                      >
                        Uso básico
                      </Button>
                    </div>
                  </div>
                  <div>
                    <h3>Builds por gama</h3>
                    <div>
                      <Button
                        className="gamaNichoBtn"
                        onClick={() => {
                          buildPorGama("baja").then((r) =>
                            selectBuild(r, false)
                          );
                        }}
                      >
                        Gama baja
                      </Button>
                      <Button
                        className="gamaNichoBtn"
                        onClick={() => {
                          buildPorGama("media").then((r) =>
                            selectBuild(r, false)
                          );
                        }}
                      >
                        Gama media
                      </Button>
                      <Button
                        className="gamaNichoBtn"
                        onClick={() => {
                          buildPorGama("alta").then((r) =>
                            selectBuild(r, false)
                          );
                        }}
                      >
                        Gama alta
                      </Button>
                    </div>
                  </div>
                  <div>
                    <h3>Build por precio</h3>
                    <Form>
                      <Form.Label style={{ color: "black" }}>
                        Presupuesto
                      </Form.Label>
                      <Form.Control
                        className="presupuestoInput"
                        type="text"
                        placeholder="ej: 1000"
                        value={presupuesto}
                        onChange={(e) => {
                          setPresupuesto(e.target.value);
                        }}
                      />
                    </Form>
                    <Button
                      className="boton-verde"
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
                      Hacer build
                    </Button>
                  </div>
                </Slider>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SelectBuild;
