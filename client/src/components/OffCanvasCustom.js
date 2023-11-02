import Cardd from "./Card";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { getListas } from "./Axios";

function OffCanvasCustom({ list, context, nombreLista }) {
    const {show, setShow, listasComponentes, setListasComponentes, build, setBuild} = useContext(context)
    let i = 0
    const handleClose = () => setShow(false);
    const handleBuild = (nombre) => {
        var conf = {...build}
        let propiedad = nombreLista.replace("List", "");
        conf[propiedad] = nombre
        setBuild(conf)
        getListas(build).then(res=> setListasComponentes(res.data))
    }

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
                    onClick={()=>handleBuild(item.nombre)}
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
