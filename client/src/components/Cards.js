import { useContext, useState } from "react";
import React from "react";
import Cardd from "./Card";
import "bootstrap/dist/css/bootstrap.min.css";

function Cards({ context }) {
  const { list } = useContext(context);
  const [selectedComponents, setSelectedComponents] = useState([]);

  // Función para manejar la selección de componentes
  const handleComponentSelect = (nombre, isSelected) => {
    if (isSelected) {
      setSelectedComponents([...selectedComponents, nombre]);
    } else {
      setSelectedComponents(selectedComponents.filter((component) => component !== nombre));
    }
  };

  let i = 0;

  return (
    <div className="container justify-content-center align-items-center">
      <div className="row g-4">
        {list.length !== 0 ? (
          list.map((item) => (
            <div className="col-12 col-md-6 col-lg-3 d-flex align-items-stretch" key={i++}>
              <Cardd
                context={context}
                nombre={item.nombre}
                imagen={item.imagen}
                isSelected={selectedComponents.includes(item.nombre)}
                onComponentSelect={handleComponentSelect}
              />
            </div>
          ))
        ) : (
          <h1>No hay resultados</h1>
        )}
      </div>
    </div>
  );
}

export default Cards;