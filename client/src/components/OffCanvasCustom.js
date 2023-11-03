import Cardd from "./Card";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useState } from "react";
import { getListas } from "./Axios";

function OffCanvasCustom({ list, context, nombreLista }) {
  const { show, setShow, listasComponentes, setListasComponentes } =
    useContext(context);
  let i = 0;
  const [newBuild, setNewBuild] = useState({});
  const handleClose = () => setShow(false);
  const handleBuild = (item) => {
    let propiedad = nombreLista.replace("List", "");

    setNewBuild((prevBuild) => {
      let conf = { ...prevBuild };

      if (item.tecnologia) {
        item.tecnologia === "m.2" ? (propiedad = "m2") : (propiedad = "sata");

        if (conf[propiedad]) {
          conf[propiedad] = conf[propiedad].concat(item);
        } else {
          conf[propiedad] = [item];
        }
      } else {
        conf[propiedad] = item;
      }

      getListas(conf).then((res) => {
        console.log(res.data);
        setListasComponentes(res.data);
      });

      handleClose();

      return conf; // Devolver el nuevo objeto 'conf' como el nuevo estado 'newBuild'
    });
  };

  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      placement="end"
      style={{ width: "70vw" }}
      className="offcanvas-dark"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Productos</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="bg-dark text-white">
        <div className="container justify-content-center align-items-center">
          <div className="row g-4">
            {list ? (
              list.map((item) => (
                <div
                  className="col-12 col-md-6 col-lg-3 d-flex align-items-stretch"
                  key={i++}
                >
                  <Cardd
                    nombre={item.nombre}
                    imagen={item.imagen}
                    onClick={() => handleBuild(item)}
                  />
                </div>
              ))
            ) : (
              <h1>No hay productos disponibles</h1>
            )}
          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
export default OffCanvasCustom;
